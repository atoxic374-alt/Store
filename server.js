const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");

const botController = require("./botController");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

const DATA_FILE = path.join(__dirname, "data", "settings.json");

const DEFAULT_SETTINGS = {
  globalStreaming: {
    watchUrl: "https://www.twitch.tv/example",
    applicationId: "1109522937989562409",
    details: "Playing something cool -- {hour}:{min}",
    state: "Having fun -- {city} {temp_c}c",
    largeImageUrl: "",
    largeImageText: "Stream",
    smallImageUrl: "",
    smallImageText: "",
    button1Name: "",
    button1Url: "",
    button2Name: "",
    button2Url: "",
    delay: 15,
    city: "Bangkok",
    showTimestamp: true,
  },
  tokenConfigs: [],
  activeTokens: [],
};

function loadSettings() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, "utf8");
      const parsed = JSON.parse(raw);
      // Migrate old format
      if (parsed.tokens && !parsed.tokenConfigs) {
        parsed.tokenConfigs = parsed.tokens.map((t) => ({
          id: crypto.randomUUID(),
          token: t,
          useGlobal: true,
          streaming: {},
        }));
        delete parsed.tokens;
      }
      if (parsed.streaming && !parsed.globalStreaming) {
        parsed.globalStreaming = parsed.streaming;
        delete parsed.streaming;
      }
      return { ...DEFAULT_SETTINGS, ...parsed };
    }
  } catch {}
  return { ...DEFAULT_SETTINGS };
}

function saveSettings(s) {
  try {
    fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
    fs.writeFileSync(DATA_FILE, JSON.stringify(s, null, 2));
  } catch (e) {
    console.error("Save error:", e.message);
  }
}

let settings = loadSettings();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

/* ── GET settings ─────────────────────────────── */
app.get("/api/settings", (_req, res) => res.json(settings));

/* ── SAVE global streaming ────────────────────── */
app.post("/api/settings", (req, res) => {
  if (req.body.globalStreaming) {
    settings.globalStreaming = { ...settings.globalStreaming, ...req.body.globalStreaming };
  }
  saveSettings(settings);
  res.json({ success: true });
});

/* ── ADD token ────────────────────────────────── */
app.post("/api/token/add", (req, res) => {
  const { token } = req.body;
  if (!token) return res.json({ success: false, error: "Token required" });
  const exists = settings.tokenConfigs.find((c) => c.token === token);
  if (exists) return res.json({ success: false, error: "Token already added" });
  const cfg = { id: crypto.randomUUID(), token, useGlobal: true, streaming: {} };
  settings.tokenConfigs.push(cfg);
  saveSettings(settings);
  res.json({ success: true, config: cfg });
});

/* ── REMOVE token ─────────────────────────────── */
app.delete("/api/token/:id", async (req, res) => {
  const cfg = settings.tokenConfigs.find((c) => c.id === req.params.id);
  if (!cfg) return res.json({ success: false, error: "Not found" });
  botController.stopBot(cfg.token, io);
  settings.tokenConfigs = settings.tokenConfigs.filter((c) => c.id !== req.params.id);
  settings.activeTokens = settings.activeTokens.filter((t) => t !== cfg.token);
  saveSettings(settings);
  res.json({ success: true });
});

/* ── SAVE per-token streaming ─────────────────── */
app.post("/api/token/:id/settings", (req, res) => {
  const cfg = settings.tokenConfigs.find((c) => c.id === req.params.id);
  if (!cfg) return res.json({ success: false, error: "Not found" });
  cfg.useGlobal = req.body.useGlobal !== false;
  if (req.body.streaming) cfg.streaming = { ...cfg.streaming, ...req.body.streaming };
  saveSettings(settings);
  res.json({ success: true, config: cfg });
});

/* ── TEST raw token (before adding) ──────────── */
app.post("/api/token/test-raw", async (req, res) => {
  const { token } = req.body;
  if (!token) return res.json({ success: false, error: "Token required" });
  const result = await botController.testToken(token);
  res.json(result);
});

/* ── TEST token validity ──────────────────────── */
app.post("/api/token/:id/test", async (req, res) => {
  const cfg = settings.tokenConfigs.find((c) => c.id === req.params.id);
  if (!cfg) return res.json({ success: false, error: "Token not found" });
  const result = await botController.testToken(cfg.token);
  // Update cached username/avatar if successful
  if (result.success) {
    cfg._username = result.username;
    cfg._avatar   = result.avatar;
    saveSettings(settings);
    io.emit("settings", settings);
  }
  res.json(result);
});

/* ── START single token ───────────────────────── */
app.post("/api/start/:id", async (req, res) => {
  const cfg = settings.tokenConfigs.find((c) => c.id === req.params.id);
  if (!cfg) return res.json({ success: false, error: "Token not found" });

  const streaming = cfg.useGlobal
    ? settings.globalStreaming
    : { ...settings.globalStreaming, ...cfg.streaming };

  const result = await botController.startBot(cfg.token, streaming, io);
  if (result.success) {
    if (!settings.activeTokens.includes(cfg.token)) settings.activeTokens.push(cfg.token);
    saveSettings(settings);
  }
  res.json(result);
});

/* ── STOP single token ────────────────────────── */
app.post("/api/stop/:id", (req, res) => {
  const cfg = settings.tokenConfigs.find((c) => c.id === req.params.id);
  if (!cfg) return res.json({ success: false, error: "Not found" });
  const result = botController.stopBot(cfg.token, io);
  settings.activeTokens = settings.activeTokens.filter((t) => t !== cfg.token);
  saveSettings(settings);
  res.json(result);
});

/* ── START ALL ────────────────────────────────── */
app.post("/api/start-all", async (req, res) => {
  let started = 0;
  for (const cfg of settings.tokenConfigs) {
    const streaming = cfg.useGlobal
      ? settings.globalStreaming
      : { ...settings.globalStreaming, ...cfg.streaming };
    const result = await botController.startBot(cfg.token, streaming, io);
    if (result.success) {
      if (!settings.activeTokens.includes(cfg.token)) settings.activeTokens.push(cfg.token);
      started++;
    }
    // Human-like delay between logins
    await new Promise((r) => setTimeout(r, 800 + Math.random() * 1200));
  }
  saveSettings(settings);
  res.json({ success: true, started });
});

/* ── STOP ALL ─────────────────────────────────── */
app.post("/api/stop-all", (_req, res) => {
  botController.stopAll(io);
  settings.activeTokens = [];
  saveSettings(settings);
  res.json({ success: true });
});

/* ── APPLY to running bots ────────────────────── */
app.post("/api/apply", async (req, res) => {
  if (req.body.globalStreaming) {
    settings.globalStreaming = { ...settings.globalStreaming, ...req.body.globalStreaming };
    saveSettings(settings);
  }
  const result = await botController.updateAll(settings, io);
  res.json(result);
});

/* ── GET status ───────────────────────────────── */
app.get("/api/status", (_req, res) => res.json(botController.getStatus()));

/* ── Socket ───────────────────────────────────── */
io.on("connection", (socket) => {
  socket.emit("status", botController.getStatus());
  socket.emit("settings", settings);
});

const PORT = 5000;
server.listen(PORT, "0.0.0.0", () => {
  console.log(`[+] StreamControl dashboard on http://0.0.0.0:${PORT}`);

  if (settings.activeTokens && settings.activeTokens.length > 0) {
    console.log(`[+] Auto-resuming ${settings.activeTokens.length} token(s)...`);
    setTimeout(async () => {
      for (const token of settings.activeTokens) {
        const cfg = settings.tokenConfigs.find((c) => c.token === token);
        if (!cfg) continue;
        const streaming = cfg.useGlobal
          ? settings.globalStreaming
          : { ...settings.globalStreaming, ...cfg.streaming };
        await botController.startBot(token, streaming, io);
        await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1500));
      }
    }, 3000);
  }
});
