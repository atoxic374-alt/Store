const { Client, RichPresence, Options } = require("discord.js-selfbot-v13");
const moment = require("moment-timezone");
const { schedule } = require("node-cron");
const os = require("os");
require("colors");

const activeBots = new Map();

/* ── Weather ──────────────────────────────────── */
class WeatherService {
  constructor(location) {
    this.location = location || "Bangkok";
    this.timezone = "Asia/Bangkok";
    this.city = this.location;
    this.temp_c = 0; this.temp_f = 0;
    this.humidity = 0; this.wind_kph = 0;
    this.loaded = false;
    this.update();
    schedule("*/5 * * * *", () => this.update());
  }
  async update() {
    try {
      const p = new URLSearchParams({
        key: "1e1a0f498dbf472cb3991045241608",
        q: this.location,
        aqi: "yes",
      });
      const r = await fetch(`https://api.weatherapi.com/v1/current.json?${p}`);
      const d = await r.json();
      this.timezone  = d.location.tz_id;
      this.city      = d.location.name;
      this.temp_c    = d.current.temp_c;
      this.temp_f    = d.current.temp_f;
      this.wind_kph  = d.current.wind_kph;
      this.humidity  = d.current.humidity;
      this.loaded    = true;
    } catch {}
  }
}

/* ── System Info ──────────────────────────────── */
class SystemInfo {
  constructor() {
    this.cpu = 0; this.ram = 0;
    this.cpuname = os.cpus()[0]?.model || "Unknown";
    this.cpucores = os.cpus().length || 1;
    this._run();
  }
  async _run() {
    await this.update();
    setInterval(() => this.update(), 6000);
  }
  async update() {
    this.ram = Math.floor(((os.totalmem() - os.freemem()) / os.totalmem()) * 100);
    const s = this._snap();
    await new Promise((r) => setTimeout(r, 500));
    const e = this._snap();
    const idle = e.idle - s.idle, total = e.total - s.total;
    this.cpu = total ? 100 - Math.floor((idle / total) * 100) : 0;
  }
  _snap() {
    let idle = 0, total = 0;
    os.cpus().forEach((c) => { for (const t in c.times) total += c.times[t]; idle += c.times.idle; });
    return { idle, total };
  }
}

const weatherCache = {};
const sysInfo = new SystemInfo();

function getWeather(city) {
  const key = (city || "Bangkok").toLowerCase();
  if (!weatherCache[key]) weatherCache[key] = new WeatherService(city || "Bangkok");
  return weatherCache[key];
}

function maskToken(token) {
  const p = token.split(".");
  return p.length < 2 ? token.slice(0, 10) + "..." : `${p[0]}.**********`;
}

/* ── Streaming Bot ────────────────────────────── */
class StreamingBot {
  constructor(token, streaming, io) {
    this.token     = token;
    this.streaming = { ...streaming };
    this.io        = io;
    this.client    = null;
    this.running   = false;
    this.timer     = null;
    this.username  = null;
    this.avatar    = null;
    this.updateCount = 0;
    this.startedAt = Date.now();
    this.error     = null;
    this.weather   = getWeather(streaming.city);
    this.sys       = sysInfo;
    this.masked    = maskToken(token);
  }

  emit(msg, type = "info") {
    const clr = { info:"cyan", success:"green", error:"red", warn:"yellow" };
    const out  = msg[clr[type] || "white"];
    if (out) console.log(out); else console.log(msg);
    this.io.emit("log", { token: this.masked, message: msg, type, time: new Date().toISOString() });
  }

  isURL(u) { try { new URL(u); return true; } catch { return false; } }

  processText(text) {
    if (!text) return text;
    const w = this.weather;
    const s = this.sys;
    const tz  = w.timezone || "Asia/Bangkok";
    const now = moment().tz(tz);
    return text
      .replace(/\{hour\}/g,    now.format("HH"))
      .replace(/\{min\}/g,     now.format("mm"))
      .replace(/\{sec\}/g,     now.format("ss"))
      .replace(/\{date\}/g,    now.format("D"))
      .replace(/\{month\}/g,   now.format("MMMM"))
      .replace(/\{year\}/g,    now.format("YYYY"))
      .replace(/\{day\}/g,     now.format("dddd"))
      .replace(/\{temp_c\}/g,  w.temp_c  ?? "?")
      .replace(/\{temp_f\}/g,  w.temp_f  ?? "?")
      .replace(/\{city\}/g,    w.city    || "?")
      .replace(/\{humidity\}/g,w.humidity ?? "?")
      .replace(/\{wind\}/g,    w.wind_kph ?? "?")
      .replace(/\{cpu\}/g,     s.cpu  ?? 0)
      .replace(/\{ram\}/g,     s.ram  ?? 0)
      .replace(/\{updates\}/g, this.updateCount);
  }

  async getImages(url1, url2) {
    try {
      const u1 = url1 && this.isURL(url1) ? url1 : null;
      const u2 = url2 && this.isURL(url2) ? url2 : null;
      if (!u1 && !u2) return { bigImage: null, smallImage: null };
      const appId  = this.streaming.applicationId || "1109522937989562409";
      const images = await RichPresence.getExternal(this.client, appId, u1, u2);
      let big = u1, small = u2;
      for (const img of images || []) {
        if (img.url === u1) big   = img.external_asset_path || img.url || u1;
        if (img.url === u2) small = img.external_asset_path || img.url || u2;
      }
      return { bigImage: big, smallImage: small };
    } catch {
      return { bigImage: url1 || null, smallImage: url2 || null };
    }
  }

  async sendPresence() {
    if (!this.client?.user || !this.running) return;
    const s = this.streaming;
    const watchUrl = s.watchUrl || "https://www.twitch.tv/example";
    if (!this.isURL(watchUrl)) { this.emit(`Invalid URL: ${watchUrl}`, "warn"); return; }

    const platform =
      watchUrl.includes("youtube.com") || watchUrl.includes("youtu.be") ? "YouTube" : "Twitch";

    try {
      const presence = new RichPresence(this.client)
        .setApplicationId(s.applicationId || "1109522937989562409")
        .setType("STREAMING")
        .setURL(watchUrl)
        .setName(platform);

      const details   = this.processText(s.details   || "");
      const state     = this.processText(s.state     || "");
      const largeTxt  = this.processText(s.largeImageText || "");
      const smallTxt  = this.processText(s.smallImageText || "");

      if (details)  presence.setDetails(details);
      if (state)    presence.setState(state);
      if (largeTxt) presence.setAssetsLargeText(largeTxt);
      if (smallTxt) presence.setAssetsSmallText(smallTxt);

      if (s.largeImageUrl || s.smallImageUrl) {
        const imgs = await this.getImages(s.largeImageUrl || null, s.smallImageUrl || null);
        if (imgs.bigImage)   presence.setAssetsLargeImage(imgs.bigImage);
        if (imgs.smallImage) presence.setAssetsSmallImage(imgs.smallImage);
      }

      try {
        if (s.button1Name && s.button1Url && this.isURL(s.button1Url))
          presence.addButton(String(s.button1Name).slice(0, 32), s.button1Url);
        if (s.button2Name && s.button2Url && this.isURL(s.button2Url))
          presence.addButton(String(s.button2Name).slice(0, 32), s.button2Url);
      } catch (btnErr) {
        this.emit(`Button warning: ${btnErr.message}`, "warn");
      }

      if (s.showTimestamp) presence.setStartTimestamp(this.startedAt);

      this.client.user.setPresence({ activities: [presence] });
      this.updateCount++;
      this.emit(`[${this.masked}] Presence updated #${this.updateCount}`, "success");
      this.io.emit("status", this.buildStatusMap());
    } catch (e) {
      this.emit(`Presence error: ${e.message}`, "error");
    }

    // Schedule next update with jitter (+-25%) for natural timing
    if (this.running) {
      const base  = (s.delay || 15) * 1000;
      const jitter = base * (0.75 + Math.random() * 0.5);
      this.timer = setTimeout(() => this.sendPresence(), Math.max(jitter, 10000));
    }
  }

  buildStatusMap() {
    const result = {};
    activeBots.forEach((bot, token) => {
      result[token] = {
        running:     bot.running,
        username:    bot.username,
        avatar:      bot.avatar,
        updateCount: bot.updateCount,
        startedAt:   bot.startedAt,
        error:       bot.error,
        masked:      maskToken(token),
      };
    });
    return result;
  }

  async start() {
    try {
      this.client = new Client({
        partials: [],
        makeCache: Options.cacheWithLimits({ MessageManager: 0 }),
      });

      // Login with a small random delay to simulate human
      await new Promise((r) => setTimeout(r, 500 + Math.random() * 1500));
      await this.client.login(this.token);

      await new Promise((resolve, reject) => {
        const timeout = setTimeout(() => reject(new Error("Login timeout")), 30000);
        this.client.once("ready", async () => {
          clearTimeout(timeout);
          this.running  = true;
          this.username = this.client.user.username;
          this.avatar   = this.client.user.displayAvatarURL();
          this.error    = null;
          this.emit(`[+] Logged in as ${this.username}`, "success");
          this.io.emit("status", this.buildStatusMap());

          // Wait a bit before first presence (natural behavior)
          await new Promise((r) => setTimeout(r, 2000 + Math.random() * 3000));
          await this.sendPresence();
          resolve();
        });
        this.client.once("error", reject);
      });

      this.client.on("error", (e) => this.emit(`Client error: ${e.message}`, "error"));

      this.client.on("shardDisconnect", () => {
        if (this.running) {
          this.emit(`[${this.masked}] Disconnected — reconnecting...`, "warn");
          this.io.emit("status", this.buildStatusMap());
        }
      });

      this.client.on("shardReconnecting", () => {
        this.emit(`[${this.masked}] Reconnecting to Discord...`, "info");
      });

      return { success: true };
    } catch (e) {
      this.error   = e.message;
      this.running = false;
      this.emit(`[-] Login failed [${this.masked}]: ${e.message}`, "error");
      if (this.client) { try { this.client.destroy(); } catch {} this.client = null; }
      return { success: false, error: e.message };
    }
  }

  stop() {
    this.running = false;
    if (this.timer) { clearTimeout(this.timer); this.timer = null; }
    try { if (this.client) { this.client.destroy(); this.client = null; } } catch {}
    this.emit(`[${this.masked}] Stopped`, "warn");
    this.io.emit("status", this.buildStatusMap());
  }

  async updateStreaming(streaming) {
    this.streaming = { ...streaming };
    this.weather   = getWeather(streaming.city);
    if (this.running) {
      if (this.timer) { clearTimeout(this.timer); this.timer = null; }
      await this.sendPresence();
    }
  }
}

/* ── Exports ──────────────────────────────────── */
async function startBot(token, streaming, io) {
  if (activeBots.has(token)) {
    const b = activeBots.get(token);
    if (b.running) return { success: false, error: "Already running" };
    b.stop();
    activeBots.delete(token);
  }
  const bot = new StreamingBot(token, streaming, io);
  activeBots.set(token, bot);
  const result = await bot.start();
  if (!result.success) activeBots.delete(token);
  return result;
}

function stopBot(token, io) {
  const bot = activeBots.get(token);
  if (!bot) return { success: false, error: "Not running" };
  bot.stop();
  activeBots.delete(token);
  if (io) io.emit("status", getStatus());
  return { success: true };
}

function stopAll(io) {
  activeBots.forEach((b) => b.stop());
  activeBots.clear();
  if (io) io.emit("status", {});
}

function getStatus() {
  const result = {};
  activeBots.forEach((bot, token) => {
    result[token] = {
      running:     bot.running,
      username:    bot.username,
      avatar:      bot.avatar,
      updateCount: bot.updateCount,
      startedAt:   bot.startedAt,
      error:       bot.error,
      masked:      maskToken(token),
    };
  });
  return result;
}

async function updateAll(settings, io) {
  const promises = [];
  activeBots.forEach((bot, token) => {
    const cfg = settings.tokenConfigs?.find((c) => c.token === token);
    const streaming = cfg && !cfg.useGlobal
      ? { ...settings.globalStreaming, ...cfg.streaming }
      : settings.globalStreaming;
    promises.push(bot.updateStreaming(streaming));
  });
  await Promise.all(promises);
  io.emit("status", getStatus());
  return { success: true, updated: activeBots.size };
}

/* ── Test Token (quick login + destroy) ───────── */
async function testToken(token) {
  const { Client, Options } = require("discord.js-selfbot-v13");
  const client = new Client({
    makeCache: Options.cacheWithLimits({ MessageManager: 0 }),
  });
  try {
    // Small human-like delay
    await new Promise((r) => setTimeout(r, 300 + Math.random() * 700));
    await client.login(token);
    const user = await new Promise((resolve, reject) => {
      const t = setTimeout(() => reject(new Error("Login timeout (15s)")), 15000);
      client.once("ready", () => { clearTimeout(t); resolve(client.user); });
      client.once("error", (e) => { clearTimeout(t); reject(e); });
    });
    const result = {
      success:  true,
      username: user.username,
      tag:      user.tag || user.username,
      id:       user.id,
      avatar:   user.displayAvatarURL({ size: 128 }),
    };
    return result;
  } catch (e) {
    return { success: false, error: e.message };
  } finally {
    try { client.destroy(); } catch {}
  }
}

module.exports = { startBot, stopBot, stopAll, getStatus, updateAll, testToken };
