/* ── i18n ─────────────────────────────────────── */
const T = {
  en: {
    idle:"Idle", streaming:"Streaming", tokens:"Tokens", actions:"Actions",
    liveLog:"Live Log", discordPreview:"Discord Preview", live:"LIVE",
    activeBots:"Active Bots", noBots:"No active bots", notConnected:"Not connected",
    globalSettings:"Global Settings", appliedToAll:"Applied to all tokens by default",
    tabBasic:"Basic", tabImages:"Images", tabButtons:"Buttons", tabAdvanced:"Advanced",
    streamUrl:"Streaming URL", streamUrlHint:"Twitch or YouTube -- platform detected automatically",
    details:"Details (Line 1)", state:"State (Line 2)",
    appId:"Application ID", appIdHint:"Discord App ID (default is fine)",
    delay:"Update Delay (sec)", delayHint:"Min 10s -- jitter applied automatically",
    weatherCity:"Weather City",
    showTimestamp:"Show Elapsed Time",
    largeImg:"Large Image URL", largeImgHint:"PNG, JPG, GIF direct link",
    smallImg:"Small Image URL", smallImgHint:"Badge shown over large image",
    largeImgText:"Large Image Tooltip", smallImgText:"Small Image Tooltip",
    btnInfo:"Discord allows max 2 buttons. Both label and URL required.",
    button1:"Button 1", button2:"Button 2", label:"Label",
    variables:"Variable Reference", varHint:"Click to copy -- use in Details or State fields",
    rawJson:"Raw JSON Config", applyJson:"Apply JSON",
    startAll:"Start All", stopAll:"Stop All", applyAll:"Apply to All",
    add:"Add", cancel:"Cancel", noTokens:"No tokens added yet",
    preview:"Preview:", simStatus:"Simulation Status",
    waitingStart:"Waiting to start...",
    tokenSettings:"Token Settings", useGlobal:"Use global settings",
    customSettings:"Custom settings",
    savedGlobal:"Global settings saved", appliedAll:"Applied to all running bots",
    started:"Started", stopped:"Stopped", removed:"Removed",
    startedAll:"All bots started", stoppedAll:"All bots stopped",
    errNoToken:"Enter a token first", errExists:"Token already added",
    errFailed:"Failed to start",
    simConnect:"Connecting to Discord...",
    simLogin:"Logging in...",
    simDelay:"Waiting (anti-detection delay)...",
    simPresence:"Setting streaming presence...",
    simDone:"Streaming active",
    simStopped:"Stopped",
    simReconnect:"Reconnecting...",
    simUpdating:"Updating presence...",
    testBtn:"Test", testingBtn:"Testing...",
    testOk:"Connected successfully", testFail:"Connection failed",
    valTitle:"Required fields missing",
    valUrlTitle:"Streaming URL is required",
    valUrlDesc:"Must be a valid Twitch or YouTube URL, e.g. https://www.twitch.tv/yourname",
    valUrlBadTitle:"Invalid Streaming URL format",
    valUrlBadDesc:"URL must start with https://www.twitch.tv/ or https://www.youtube.com/ or https://youtu.be/",
    valNoTokenTitle:"No tokens added",
    valNoTokenDesc:"Add at least one Discord token to start streaming",
    valBtnUrlTitle:"Button URL missing",
    valBtnUrlDesc:"Button \"{name}\" has a label but no URL -- add a URL or remove the label",
    setupGuide:"Setup Guide",
    g1Title:"Discord Token",
    g1Desc:"Open Discord in browser (discord.com/app) then press F12, go to the Console tab and paste this command to get your token. Copy the output string.",
    g1Warn:"Never share your token with anyone -- it gives full access to your account.",
    g2Title:"Streaming URL",
    g2Desc:"Your Twitch or YouTube channel URL. Format: https://www.twitch.tv/yourname",
    g3Title:"Application ID",
    g3Desc:"Go to discord.com/developers/applications, create a new app and copy the Application ID. The built-in default ID works fine for most users.",
    g4Title:"Images (Optional)",
    g4Desc:"Upload any image to imgur.com, right-click the displayed image and copy image address. Paste the direct .png/.jpg/.gif URL here.",
    g5Title:"Weather City",
    g5Desc:"Type any city name in English, e.g. Riyadh, Dubai, London, Bangkok. Used for {temp_c}, {city}, {humidity}, {wind} variables.",
  },
  ar: {
    idle:"خامل", streaming:"يبث", tokens:"التوكنات", actions:"الاجراءات",
    liveLog:"السجل المباشر", discordPreview:"معاينة ديسكورد", live:"مباشر",
    activeBots:"البوتات النشطة", noBots:"لا توجد بوتات نشطة", notConnected:"غير متصل",
    globalSettings:"الاعدادات العامة", appliedToAll:"تطبق على جميع التوكنات افتراضياً",
    tabBasic:"اساسي", tabImages:"صور", tabButtons:"ازرار", tabAdvanced:"متقدم",
    streamUrl:"رابط البث", streamUrlHint:"تويتش او يوتيوب -- يُكتشف النظام تلقائياً",
    details:"التفاصيل (السطر 1)", state:"الحالة (السطر 2)",
    appId:"معرف التطبيق", appIdHint:"معرف تطبيق ديسكورد (الافتراضي جيد)",
    delay:"تأخير التحديث (ثانية)", delayHint:"الحد الادنى 10 ثواني -- يُضاف تأخير عشوائي تلقائياً",
    weatherCity:"مدينة الطقس",
    showTimestamp:"اظهار الوقت المنقضي",
    largeImg:"رابط الصورة الكبيرة", largeImgHint:"رابط مباشر PNG او JPG او GIF",
    smallImg:"رابط الصورة الصغيرة", smallImgHint:"شارة تظهر فوق الصورة الكبيرة",
    largeImgText:"تلميح الصورة الكبيرة", smallImgText:"تلميح الصورة الصغيرة",
    btnInfo:"ديسكورد يسمح بزرين كحد اقصى. كلاهما يحتاج نص ورابط.",
    button1:"الزر الاول", button2:"الزر الثاني", label:"النص",
    variables:"مرجع المتغيرات", varHint:"اضغط للنسخ -- استخدمها في حقلي التفاصيل والحالة",
    rawJson:"الكود JSON", applyJson:"تطبيق JSON",
    startAll:"تشغيل الكل", stopAll:"ايقاف الكل", applyAll:"تطبيق على الكل",
    add:"اضافة", cancel:"الغاء", noTokens:"لا يوجد توكنات مضافة",
    preview:"معاينة:", simStatus:"حالة المحاكاة",
    waitingStart:"بانتظار التشغيل...",
    tokenSettings:"اعدادات التوكن", useGlobal:"استخدام الاعدادات العامة",
    customSettings:"اعدادات مخصصة",
    savedGlobal:"تم حفظ الاعدادات العامة", appliedAll:"تم التطبيق على جميع البوتات",
    started:"تم التشغيل", stopped:"تم الايقاف", removed:"تم الحذف",
    startedAll:"تم تشغيل جميع البوتات", stoppedAll:"تم ايقاف جميع البوتات",
    errNoToken:"ادخل توكن اولاً", errExists:"التوكن مضاف مسبقاً",
    errFailed:"فشل التشغيل",
    simConnect:"الاتصال بديسكورد...",
    simLogin:"تسجيل الدخول...",
    simDelay:"انتظار (تأخير الحماية)...",
    simPresence:"ضبط حالة البث...",
    simDone:"البث نشط",
    simStopped:"تم الايقاف",
    simReconnect:"اعادة الاتصال...",
    simUpdating:"تحديث الحضور...",
    testBtn:"اختبار", testingBtn:"جاري الاختبار...",
    testOk:"تم الاتصال بنجاح", testFail:"فشل الاتصال",
    valTitle:"حقول مطلوبة ناقصة",
    valUrlTitle:"رابط البث مطلوب",
    valUrlDesc:"يجب ان يكون رابطاً صحيحاً لتويتش او يوتيوب، مثال: https://www.twitch.tv/yourname",
    valUrlBadTitle:"صيغة رابط البث غير صحيحة",
    valUrlBadDesc:"يجب ان يبدأ الرابط بـ https://www.twitch.tv/ او https://www.youtube.com/ او https://youtu.be/",
    valNoTokenTitle:"لا يوجد توكنات مضافة",
    valNoTokenDesc:"اضف توكناً واحداً على الاقل لبدء البث",
    valBtnUrlTitle:"رابط الزر ناقص",
    valBtnUrlDesc:"الزر \"{name}\" يحتوي على نص لكن بدون رابط -- اضف رابطاً او احذف النص",
    setupGuide:"دليل الاعداد",
    g1Title:"توكن ديسكورد",
    g1Desc:"افتح ديسكورد في المتصفح (discord.com/app) ثم اضغط F12، اذهب لتبويب Console والصق الامر للحصول على التوكن. انسخ النتيجة.",
    g1Warn:"لا تشارك التوكن مع احد -- يمنح وصولاً كاملاً لحسابك.",
    g2Title:"رابط البث",
    g2Desc:"رابط قناتك على تويتش او يوتيوب. المثال: https://www.twitch.tv/yourname",
    g3Title:"معرف التطبيق",
    g3Desc:"اذهب لـ discord.com/developers/applications، انشئ تطبيقاً جديداً وانسخ Application ID. المعرف الافتراضي يعمل بشكل جيد للمستخدمين.",
    g4Title:"الصور (اختياري)",
    g4Desc:"ارفع اي صورة على imgur.com، انقر بزر الماوس الايمن على الصورة المعروضة وانسخ عنوان الصورة. الصق الرابط المباشر بصيغة png او jpg او gif.",
    g5Title:"مدينة الطقس",
    g5Desc:"اكتب اسم اي مدينة بالانجليزية، مثل Riyadh او Dubai او London. تستخدم لمتغيرات {temp_c} و {city} و {humidity} و {wind}.",
  }
};

let lang = localStorage.getItem("sc_lang") || "en";
let settings = {};
let botStatus = {};
let selectedTokenId = null;
let previewTimer = null;

const socket = io();

/* ── Apply translations ───────────────────────── */
function applyLang() {
  const isAr = lang === "ar";
  document.documentElement.lang = lang;
  document.documentElement.dir  = isAr ? "rtl" : "ltr";
  document.getElementById("langLabel").textContent = isAr ? "EN" : "AR";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (T[lang][key]) el.textContent = T[lang][key];
  });
  localStorage.setItem("sc_lang", lang);
}

document.getElementById("langBtn").addEventListener("click", () => {
  lang = lang === "en" ? "ar" : "en";
  applyLang();
});

/* ── Socket ───────────────────────────────────── */
socket.on("status", data => {
  botStatus = data || {};
  renderBots();
  renderTokenList();
  updateGlobalStatus();
  updateSimSteps();
});

socket.on("log", entry => addLog(entry.message, entry.type));

socket.on("settings", s => {
  settings = s;
  loadFormFromSettings(getActiveStreaming());
  renderTokenList();
});

/* ── Init ─────────────────────────────────────── */
async function init() {
  const res = await fetch("/api/settings");
  settings = await res.json();
  loadFormFromSettings(getActiveStreaming());
  renderTokenList();
  updateRawJson();
  startPreviewTimer();
  applyLang();
}

/* ── Get active streaming config ──────────────── */
function getActiveStreaming() {
  if (!selectedTokenId) return settings.globalStreaming || {};
  const cfg = (settings.tokenConfigs || []).find(c => c.id === selectedTokenId);
  if (!cfg) return settings.globalStreaming || {};
  if (cfg.useGlobal) return settings.globalStreaming || {};
  return { ...settings.globalStreaming, ...cfg.streaming };
}

/* ── Tabs ─────────────────────────────────────── */
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-pane").forEach(t => t.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("tab-" + btn.dataset.tab).classList.add("active");
    if (btn.dataset.tab === "advanced") updateRawJson();
  });
});

/* ── Context bar ──────────────────────────────── */
function updateContextBar() {
  const lbl = document.getElementById("ctxLabel");
  const sub = document.getElementById("ctxSub");
  if (!selectedTokenId) {
    lbl.textContent = T[lang].globalSettings;
    sub.textContent = T[lang].appliedToAll;
  } else {
    const cfg = (settings.tokenConfigs || []).find(c => c.id === selectedTokenId);
    if (cfg) {
      lbl.textContent = cfg.useGlobal ? (T[lang].globalSettings) : (T[lang].customSettings);
      const masked = maskToken(cfg.token);
      sub.textContent = masked;
    }
  }
}

/* ── Load form ────────────────────────────────── */
function loadFormFromSettings(s) {
  if (!s) return;
  setVal("watchUrl",       s.watchUrl       || "");
  setVal("details",        s.details        || "");
  setVal("state",          s.state          || "");
  setVal("applicationId",  s.applicationId  || "");
  setVal("delay",          s.delay          || 15);
  setVal("city",           s.city           || "");
  setVal("largeImageUrl",  s.largeImageUrl  || "");
  setVal("largeImageText", s.largeImageText || "");
  setVal("smallImageUrl",  s.smallImageUrl  || "");
  setVal("smallImageText", s.smallImageText || "");
  setVal("button1Name",    s.button1Name    || "");
  setVal("button1Url",     s.button1Url     || "");
  setVal("button2Name",    s.button2Name    || "");
  setVal("button2Url",     s.button2Url     || "");
  document.getElementById("showTimestamp").checked = s.showTimestamp !== false;
  updateImagePreviews();
  updateButtonPreviews();
  updateContextBar();
  if (document.getElementById("tab-advanced").classList.contains("active")) updateRawJson();
}

/* ── Read form ────────────────────────────────── */
function readForm() {
  return {
    watchUrl:       getVal("watchUrl"),
    details:        getVal("details"),
    state:          getVal("state"),
    applicationId:  getVal("applicationId"),
    delay:          Math.max(10, parseInt(getVal("delay")) || 15),
    city:           getVal("city"),
    largeImageUrl:  getVal("largeImageUrl"),
    largeImageText: getVal("largeImageText"),
    smallImageUrl:  getVal("smallImageUrl"),
    smallImageText: getVal("smallImageText"),
    button1Name:    getVal("button1Name"),
    button1Url:     getVal("button1Url"),
    button2Name:    getVal("button2Name"),
    button2Url:     getVal("button2Url"),
    showTimestamp:  document.getElementById("showTimestamp").checked,
  };
}

/* ── Save settings ────────────────────────────── */
async function saveCurrentSettings() {
  const data = readForm();
  if (!selectedTokenId) {
    // Save global
    settings.globalStreaming = { ...settings.globalStreaming, ...data };
    await fetch("/api/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ globalStreaming: data }),
    });
    toast(T[lang].savedGlobal, "ok");
  } else {
    // Save per-token
    const cfg = (settings.tokenConfigs || []).find(c => c.id === selectedTokenId);
    if (cfg && !cfg.useGlobal) {
      cfg.streaming = { ...cfg.streaming, ...data };
      await fetch(`/api/token/${selectedTokenId}/settings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ useGlobal: false, streaming: data }),
      });
      toast(T[lang].savedGlobal, "ok");
    }
  }
  updateRawJson();
}

/* ── Token Management ─────────────────────────── */
const addTokenBtn   = document.getElementById("addTokenBtn");
const addTokenForm  = document.getElementById("addTokenForm");
const newTokenInput = document.getElementById("newTokenInput");
const confirmAdd    = document.getElementById("confirmAddToken");
const cancelAdd     = document.getElementById("cancelAddToken");

addTokenBtn.addEventListener("click", () => {
  addTokenForm.style.display = addTokenForm.style.display === "none" ? "block" : "none";
  if (addTokenForm.style.display === "block") newTokenInput.focus();
});
cancelAdd.addEventListener("click", () => {
  addTokenForm.style.display = "none";
  newTokenInput.value = "";
});
confirmAdd.addEventListener("click", addToken);
newTokenInput.addEventListener("keydown", e => { if (e.key === "Enter") addToken(); });

async function addToken() {
  const token = newTokenInput.value.trim();
  if (!token) { toast(T[lang].errNoToken, "err"); return; }
  const res = await fetch("/api/token/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });
  const data = await res.json();
  if (!data.success) { toast(data.error || T[lang].errExists, "err"); return; }
  settings.tokenConfigs = settings.tokenConfigs || [];
  settings.tokenConfigs.push(data.config);
  newTokenInput.value = "";
  addTokenForm.style.display = "none";
  renderTokenList();
  toast(T[lang].add + " OK", "ok");
}

async function removeToken(id) {
  await fetch(`/api/token/${id}`, { method: "DELETE" });
  settings.tokenConfigs = (settings.tokenConfigs || []).filter(c => c.id !== id);
  if (selectedTokenId === id) {
    selectedTokenId = null;
    updateContextBar();
    loadFormFromSettings(settings.globalStreaming || {});
  }
  renderTokenList();
  toast(T[lang].removed, "ok");
}

/* ── Validation ───────────────────────────────── */
function validateStreaming(s) {
  const issues = [];
  const url = (s.watchUrl || "").trim();
  if (!url) {
    issues.push({ key: "url", title: T[lang].valUrlTitle, desc: T[lang].valUrlDesc });
  } else {
    const isTwitch  = url.startsWith("https://www.twitch.tv/") || url.startsWith("https://twitch.tv/");
    const isYT      = url.startsWith("https://www.youtube.com/") || url.startsWith("https://youtu.be/");
    const isValidURL = (() => { try { new URL(url); return true; } catch { return false; } })();
    if (!isValidURL || (!isTwitch && !isYT)) {
      issues.push({ key: "urlbad", title: T[lang].valUrlBadTitle, desc: T[lang].valUrlBadDesc });
    }
  }
  const b1n = (s.button1Name || "").trim();
  const b1u = (s.button1Url  || "").trim();
  const b2n = (s.button2Name || "").trim();
  const b2u = (s.button2Url  || "").trim();
  if (b1n && !b1u) issues.push({ key:"btn1url", title:T[lang].valBtnUrlTitle, desc:T[lang].valBtnUrlDesc.replace("{name}", b1n) });
  if (b2n && !b2u) issues.push({ key:"btn2url", title:T[lang].valBtnUrlTitle, desc:T[lang].valBtnUrlDesc.replace("{name}", b2n) });
  return issues;
}

function validateTokens() {
  const issues = [];
  const configs = settings.tokenConfigs || [];
  if (!configs.length) {
    issues.push({ key:"notoken", title: T[lang].valNoTokenTitle, desc: T[lang].valNoTokenDesc });
  }
  return issues;
}

function showValidation(issues) {
  const banner = document.getElementById("valBanner");
  const list   = document.getElementById("valList");
  const head   = banner.querySelector("[data-i18n='valTitle']");
  if (head) head.textContent = T[lang].valTitle;
  if (!issues.length) {
    banner.style.display = "none";
    return true;
  }
  list.innerHTML = issues.map(iss => `
    <li class="val-item">
      <svg viewBox="0 0 13 13" fill="none">
        <path d="M6.5 1L12 12H1L6.5 1Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round" fill="rgba(251,191,36,.1)"/>
        <path d="M6.5 5.5v2.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
        <circle cx="6.5" cy="10" r="0.7" fill="currentColor"/>
      </svg>
      <div class="val-item-body">
        <div class="val-item-title">${escHtml(iss.title)}</div>
        <div class="val-item-desc">${escHtml(iss.desc)}</div>
      </div>
    </li>`).join("");
  banner.style.display = "block";
  // Auto-switch to the right tab if URL issue
  const hasUrlIssue = issues.some(i => i.key === "url" || i.key === "urlbad");
  const hasBtnIssue = issues.some(i => i.key === "btn1url" || i.key === "btn2url");
  if (hasUrlIssue) switchTab("basic");
  else if (hasBtnIssue) switchTab("buttons");
  banner.scrollIntoView({ behavior: "smooth", block: "nearest" });
  return false;
}

function switchTab(name) {
  document.querySelectorAll(".tab-btn").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".tab-pane").forEach(t => t.classList.remove("active"));
  const btn = document.querySelector(`.tab-btn[data-tab="${name}"]`);
  if (btn) btn.classList.add("active");
  const pane = document.getElementById("tab-" + name);
  if (pane) pane.classList.add("active");
}

function clearValidation() {
  const banner = document.getElementById("valBanner");
  if (banner) banner.style.display = "none";
}

/* ── Test connection ──────────────────────────── */
async function testTokenById(id) {
  const btn = document.querySelector(`.tc-btn.test[data-tid="${id}"]`);
  if (btn) { btn.disabled = true; btn.innerHTML = `<span class="spin"><svg viewBox="0 0 12 12" fill="none" style="width:11px;height:11px"><circle cx="6" cy="6" r="4.5" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 14" stroke-linecap="round"/></svg></span>`; }

  const res  = await fetch(`/api/token/${id}/test`, { method: "POST" });
  const data = await res.json();

  if (btn) {
    btn.disabled = false;
    btn.innerHTML = data.success
      ? `<svg viewBox="0 0 12 12" fill="none"><path d="M2 6l2.5 2.5L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
      : `<svg viewBox="0 0 12 12" fill="none"><path d="M2 2l8 8M10 2L2 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
    btn.style.color = data.success ? "var(--green)" : "var(--red)";
    setTimeout(() => {
      btn.style.color = "";
      btn.innerHTML = `<svg viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="4.5" stroke="currentColor" stroke-width="1.3"/><path d="M4 6l1.5 1.5L8.5 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    }, 3000);
  }

  if (data.success) {
    toast(`${T[lang].testOk}: ${data.username}`, "ok");
    // Update the card visually
    renderTokenList();
  } else {
    toast(`${T[lang].testFail}: ${data.error}`, "err");
  }
}

async function testBeforeAddToken() {
  const token = newTokenInput.value.trim();
  if (!token) { toast(T[lang].errNoToken, "err"); return; }
  const row = document.getElementById("testResultRow");
  const btn = document.getElementById("testBeforeAdd");
  btn.disabled = true;
  btn.textContent = T[lang].testingBtn;
  row.style.display = "flex";
  row.className = "test-result-row loading";
  row.innerHTML = `<span class="spin"><svg viewBox="0 0 16 16" fill="none" style="width:14px;height:14px"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5" stroke-dasharray="10 20" stroke-linecap="round"/></svg></span><span>${T[lang].testingBtn}</span>`;

  // Call a quick test without adding the token permanently
  const res  = await fetch("/api/token/test-raw", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });
  const data = await res.json();
  btn.disabled = false;
  btn.textContent = T[lang].testBtn;

  if (data.success) {
    const avaHTML = data.avatar
      ? `<div class="tr-ava"><img src="${data.avatar}" alt=""/></div>`
      : `<div class="tr-ava"></div>`;
    row.className = "test-result-row ok";
    row.innerHTML = `${avaHTML}<div class="tr-info"><div class="tr-name">${escHtml(data.username)}</div><div class="tr-sub">${T[lang].testOk}</div></div><svg viewBox="0 0 14 14" fill="none" style="width:14px;height:14px;flex-shrink:0"><path d="M2 7l3 3 7-6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  } else {
    row.className = "test-result-row err";
    row.innerHTML = `<svg viewBox="0 0 14 14" fill="none" style="width:14px;height:14px;flex-shrink:0"><path d="M2 2l10 10M12 2L2 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg><div class="tr-info"><div class="tr-name">${T[lang].testFail}</div><div class="tr-sub">${escHtml(data.error || "")}</div></div>`;
  }
}

async function startToken(id) {
  // Validate before starting
  const cfg = (settings.tokenConfigs || []).find(c => c.id === id);
  const streaming = cfg && !cfg.useGlobal
    ? { ...settings.globalStreaming, ...cfg.streaming }
    : settings.globalStreaming;
  const issues = validateStreaming(streaming || {});
  if (!showValidation(issues)) return;
  clearValidation();

  addSimStep(T[lang].simConnect, "active");
  if (cfg) await saveTokenOverrideIfNeeded(cfg);
  const res = await fetch(`/api/start/${id}`, { method: "POST" });
  const data = await res.json();
  if (data.success) {
    if (!settings.activeTokens) settings.activeTokens = [];
    const token = (settings.tokenConfigs || []).find(c => c.id === id)?.token;
    if (token && !settings.activeTokens.includes(token)) settings.activeTokens.push(token);
    toast(T[lang].started, "ok");
    finishSimSteps();
  } else {
    toast(data.error || T[lang].errFailed, "err");
    addSimStep(data.error || T[lang].errFailed, "error");
  }
}

async function stopToken(id) {
  const res = await fetch(`/api/stop/${id}`, { method: "POST" });
  const data = await res.json();
  if (data.success) {
    const token = (settings.tokenConfigs || []).find(c => c.id === id)?.token;
    if (token) settings.activeTokens = (settings.activeTokens || []).filter(t => t !== token);
    toast(T[lang].stopped, "ok");
    addSimStep(T[lang].simStopped, "error");
  }
}

async function saveTokenOverrideIfNeeded(cfg) {
  if (!cfg.useGlobal) {
    await fetch(`/api/token/${cfg.id}/settings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ useGlobal: false, streaming: cfg.streaming || {} }),
    });
  }
}

async function toggleTokenOverride(id, useGlobal) {
  const cfg = (settings.tokenConfigs || []).find(c => c.id === id);
  if (!cfg) return;
  cfg.useGlobal = useGlobal;
  await fetch(`/api/token/${id}/settings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ useGlobal }),
  });
  if (selectedTokenId === id) {
    loadFormFromSettings(getActiveStreaming());
    updateContextBar();
  }
  renderTokenList();
}

/* ── Render token list ────────────────────────── */
function renderTokenList() {
  const list = document.getElementById("tokenList");
  const configs = settings.tokenConfigs || [];
  if (!configs.length) {
    list.innerHTML = `<div class="empty-hint" data-i18n="noTokens">${T[lang].noTokens}</div>`;
    return;
  }
  list.innerHTML = configs.map(cfg => {
    const status = botStatus[cfg.token];
    const running = status?.running;
    const username = status?.username || maskToken(cfg.token);
    const avatar = status?.avatar || "";
    const selected = cfg.id === selectedTokenId;
    const dotClass = running ? "running" : (status?.error ? "error" : "");

    const avatarHTML = avatar
      ? `<img src="${avatar}" alt=""/>`
      : `<svg viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#2d2d3d"/><circle cx="14" cy="10" r="4" fill="#4a4a5e"/><ellipse cx="14" cy="22" rx="8" ry="5" fill="#4a4a5e"/></svg>`;

    return `
    <div class="token-card${running?" running":""}${selected?" selected":""}" data-id="${cfg.id}">
      <div class="tc-main" onclick="selectToken('${cfg.id}')">
        <div class="tc-ava">${avatarHTML}</div>
        <div class="tc-info">
          <div class="tc-name">${escHtml(username)}</div>
          <div class="tc-mask">${maskToken(cfg.token)}</div>
        </div>
        <div class="tc-status"><div class="tc-dot ${dotClass}"></div></div>
        <div class="tc-btns" onclick="event.stopPropagation()">
          <button class="tc-btn test" data-tid="${cfg.id}" title="${T[lang].testBtn}" onclick="testTokenById('${cfg.id}')">
            <svg viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="4.5" stroke="currentColor" stroke-width="1.3"/><path d="M4 6l1.5 1.5L8.5 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          ${running
            ? `<button class="tc-btn stop" title="${T[lang].stopped}" onclick="stopToken('${cfg.id}')">
                <svg viewBox="0 0 12 12" fill="none"><rect x="1.5" y="1.5" width="9" height="9" rx="1.5" fill="currentColor"/></svg>
               </button>`
            : `<button class="tc-btn play" title="${T[lang].started}" onclick="startToken('${cfg.id}')">
                <svg viewBox="0 0 12 12" fill="none"><polygon points="2,1 11,6 2,11" fill="currentColor"/></svg>
               </button>`
          }
          <button class="tc-btn del" title="${T[lang].removed}" onclick="removeToken('${cfg.id}')">
            <svg viewBox="0 0 12 12" fill="none"><path d="M2 2l8 8M10 2L2 10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
          </button>
        </div>
      </div>
      <div class="tc-sub">
        <div class="tc-override-row">
          <div class="toggle-wrap" style="width:30px;height:16px">
            <input type="checkbox" ${cfg.useGlobal?"checked":""} onchange="toggleTokenOverride('${cfg.id}',this.checked)" style="opacity:0;width:0;height:0"/>
            <span class="tog-slider" style="border-radius:99px;position:absolute;inset:0;background:${cfg.useGlobal?"#6366f1":"#252534"};border:1px solid ${cfg.useGlobal?"#6366f1":"#363648"};cursor:pointer;transition:.2s;" onclick="this.previousElementSibling.click()">
              <span style="position:absolute;width:10px;height:10px;border-radius:50%;background:white;top:50%;transform:translateY(-50%);left:${cfg.useGlobal?"18px":"3px"};transition:.2s;"></span>
            </span>
          </div>
          <span>${cfg.useGlobal ? T[lang].useGlobal : T[lang].customSettings}</span>
        </div>
      </div>
    </div>`;
  }).join("");
}

/* ── Select token ─────────────────────────────── */
function selectToken(id) {
  selectedTokenId = selectedTokenId === id ? null : id;
  loadFormFromSettings(getActiveStreaming());
  updateContextBar();
  renderTokenList();
  updateRawJson();
}

/* ── Start / Stop All ─────────────────────────── */
document.getElementById("startAllBtn").addEventListener("click", async () => {
  // Validate tokens list
  const tIssues = validateTokens();
  if (!showValidation(tIssues)) return;
  // Validate streaming URL
  const sIssues = validateStreaming(settings.globalStreaming || {});
  if (!showValidation(sIssues)) return;
  clearValidation();

  await saveCurrentSettings();
  clearSimSteps();
  addSimStep(T[lang].simConnect, "active");
  const res = await fetch("/api/start-all", { method: "POST" });
  const data = await res.json();
  toast(`${T[lang].startedAll} (${data.started})`, "ok");
  finishSimSteps();
});

document.getElementById("stopAllBtn").addEventListener("click", async () => {
  await fetch("/api/stop-all", { method: "POST" });
  settings.activeTokens = [];
  toast(T[lang].stoppedAll, "ok");
  addSimStep(T[lang].simStopped, "error");
});

document.getElementById("applyBtn").addEventListener("click", async () => {
  await saveCurrentSettings();
  addSimStep(T[lang].simUpdating, "active");
  const res = await fetch("/api/apply", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ globalStreaming: readForm() }),
  });
  const data = await res.json();
  toast(`${T[lang].appliedAll} (${data.updated || 0})`, "ok");
  updateRawJson();
  addSimStep(T[lang].simDone, "done");
});

/* ── Auto-save on input ───────────────────────── */
let saveTimeout = null;
document.querySelectorAll(".input-field, #showTimestamp").forEach(el => {
  el.addEventListener("input", () => {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(saveCurrentSettings, 1500);
    updatePreviewFromForm();
    updateImagePreviews();
    updateButtonPreviews();
  });
  el.addEventListener("change", () => {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(saveCurrentSettings, 500);
    updatePreviewFromForm();
  });
});

/* ── Image previews ───────────────────────────── */
function updateImagePreviews() {
  const large = getVal("largeImageUrl");
  const small = getVal("smallImageUrl");
  const lp = document.getElementById("largeImgPreview");
  const sp = document.getElementById("smallImgPreview");
  if (!lp || !sp) return;

  const existLargeImg = lp.querySelector("img");
  if (large && isURL(large)) {
    if (!existLargeImg) {
      const img = document.createElement("img"); img.src = large;
      lp.insertBefore(img, lp.firstChild);
    } else existLargeImg.src = large;
  } else if (existLargeImg) existLargeImg.remove();

  const existSmallImg = sp.querySelector("img");
  if (small && isURL(small)) {
    if (!existSmallImg) {
      const img = document.createElement("img"); img.src = small;
      sp.insertBefore(img, sp.firstChild);
    } else existSmallImg.src = small;
  } else if (existSmallImg) existSmallImg.remove();

  // Update preview card too
  const prevLarge = document.getElementById("prevLargeImg");
  const prevSmall = document.getElementById("prevSmallImg");
  if (prevLarge) {
    const existing = prevLarge.querySelector("img");
    if (large && isURL(large)) {
      if (!existing) {
        const img = document.createElement("img"); img.src = large; img.style.cssText="width:100%;height:100%;object-fit:cover;position:absolute;inset:0";
        prevLarge.appendChild(img);
      } else existing.src = large;
    } else if (existing) existing.remove();
  }
  if (prevSmall) {
    const existing = prevSmall.querySelector("img");
    if (small && isURL(small)) {
      if (!existing) {
        const img = document.createElement("img"); img.src = small; img.style.cssText="width:100%;height:100%;object-fit:cover;position:absolute;inset:0";
        prevSmall.appendChild(img);
      } else existing.src = small;
    } else if (existing) existing.remove();
  }
}

/* ── Button previews ──────────────────────────── */
function updateButtonPreviews() {
  const b1n = getVal("button1Name"); const b1u = getVal("button1Url");
  const b2n = getVal("button2Name"); const b2u = getVal("button2Url");
  const pb1 = document.getElementById("prevBtn1");
  const pb2 = document.getElementById("prevBtn2");
  if (pb1) { pb1.textContent = b1n || "Button 1"; pb1.classList.toggle("hidden", !b1n || !b1u); }
  if (pb2) { pb2.textContent = b2n || "Button 2"; pb2.classList.toggle("hidden", !b2n || !b2u); }
  // In preview card
  const actBtns = document.getElementById("prevBtns");
  if (!actBtns) return;
  actBtns.innerHTML = "";
  if (b1n && b1u) actBtns.innerHTML += `<div class="act-btn-prev">${escHtml(b1n)}</div>`;
  if (b2n && b2u) actBtns.innerHTML += `<div class="act-btn-prev">${escHtml(b2n)}</div>`;
}

/* ── Live preview ─────────────────────────────── */
function updatePreviewFromForm() {
  const watchUrl = getVal("watchUrl");
  const platform = watchUrl.includes("youtube") || watchUrl.includes("youtu.be") ? "LIVE ON YOUTUBE" : "LIVE ON TWITCH";
  const el = id => document.getElementById(id);
  if (el("prevPlatform")) el("prevPlatform").textContent = platform;
  if (el("prevDetails"))  el("prevDetails").textContent  = getVal("details") || "---";
  if (el("prevState"))    el("prevState").textContent    = getVal("state")   || "---";
  const showTs = document.getElementById("showTimestamp")?.checked;
  if (el("prevTimer"))    el("prevTimer").style.display  = showTs ? "" : "none";
}

/* ── Bots section ─────────────────────────────── */
function renderBots() {
  const list = document.getElementById("botsList");
  const entries = Object.entries(botStatus);
  if (!entries.length) {
    list.innerHTML = `<div class="no-bots">${T[lang].noBots}</div>`;
    return;
  }
  list.innerHTML = entries.map(([token, st]) => {
    const avatarHTML = st.avatar
      ? `<img src="${st.avatar}" alt=""/>`
      : `<svg viewBox="0 0 26 26" fill="none"><circle cx="13" cy="13" r="13" fill="#2d2d3d"/><circle cx="13" cy="9" r="3.5" fill="#4a4a5e"/><ellipse cx="13" cy="20" rx="7" ry="4.5" fill="#4a4a5e"/></svg>`;
    return `
    <div class="bot-item">
      <div class="bi-ava">${avatarHTML}</div>
      <div class="bi-info">
        <div class="bi-name">${escHtml(st.username || st.masked || maskToken(token))}</div>
        <div class="bi-count">#${st.updateCount || 0} updates</div>
      </div>
      <div class="bi-dot ${st.running?"on":"off"}"></div>
    </div>`;
  }).join("");
}

/* ── Global status ────────────────────────────── */
function updateGlobalStatus() {
  const dot  = document.getElementById("globalDot");
  const text = document.getElementById("globalStatus");
  const running = Object.values(botStatus).filter(b => b.running);
  if (running.length > 0) {
    dot.className  = "hstatus-dot streaming";
    text.textContent = `${T[lang].streaming} (${running.length})`;
  } else {
    dot.className  = "hstatus-dot";
    text.textContent = T[lang].idle;
  }
}

/* ── Update preview username/avatar from status ─ */
function updatePreviewUserFromStatus() {
  const running = Object.values(botStatus).find(b => b.running);
  const prevAvatar = document.getElementById("prevAvatar");
  const prevUsername = document.getElementById("prevUsername");
  const prevTag = document.getElementById("prevTag");
  const ring = document.getElementById("prevStatusRing");

  if (running) {
    if (prevUsername) prevUsername.textContent = running.username || "username";
    if (prevTag) prevTag.textContent = "@" + (running.username || "user");
    if (running.avatar && prevAvatar) {
      prevAvatar.innerHTML = `<img src="${running.avatar}" style="width:100%;height:100%;object-fit:cover"/>`;
    }
    if (ring) ring.className = "dsc-status-ring streaming-ring";
  } else {
    if (prevUsername) prevUsername.textContent = "username";
    if (prevTag) { prevTag.dataset.i18n = "notConnected"; prevTag.textContent = T[lang].notConnected; }
    if (ring) ring.className = "dsc-status-ring";
  }
}

/* ── Preview timer ────────────────────────────── */
let elapsed = 0;
function startPreviewTimer() {
  clearInterval(previewTimer);
  elapsed = 0;
  previewTimer = setInterval(() => {
    elapsed++;
    const mm = String(Math.floor(elapsed / 60)).padStart(2, "0");
    const ss = String(elapsed % 60).padStart(2, "0");
    const el = document.getElementById("prevTimer");
    if (el) el.textContent = `${mm}:${ss} elapsed`;
    updatePreviewUserFromStatus();
    updatePreviewFromForm();
  }, 1000);
}

/* ── Simulation steps ─────────────────────────── */
function updateSimSteps() {
  const running = Object.values(botStatus).filter(b => b.running);
  if (!running.length) return;
  const list = document.getElementById("simSteps");
  if (!list) return;
  const steps = [
    { key: "simConnect",  state: "done" },
    { key: "simLogin",    state: "done" },
    { key: "simDelay",    state: "done" },
    { key: "simPresence", state: "done" },
    { key: "simDone",     state: "done" },
  ];
  list.innerHTML = steps.map(s => `
    <div class="step-row step-${s.state}">
      <span class="step-dot"></span>
      <span>${T[lang][s.key]}</span>
    </div>`).join("");
}

function clearSimSteps() {
  const list = document.getElementById("simSteps");
  if (list) list.innerHTML = `<div class="step-row step-idle"><span class="step-dot"></span><span>${T[lang].simConnect}</span></div>`;
}

function addSimStep(text, state) {
  const list = document.getElementById("simSteps");
  if (!list) return;
  const row = document.createElement("div");
  row.className = `step-row step-${state}`;
  row.innerHTML = `<span class="step-dot"></span><span>${escHtml(text)}</span>`;
  list.appendChild(row);
  list.scrollTop = list.scrollHeight;
}

function finishSimSteps() {
  setTimeout(() => {
    clearSimSteps();
    const steps = ["simConnect","simLogin","simDelay","simPresence","simDone"];
    let i = 0;
    const interval = setInterval(() => {
      if (i >= steps.length) { clearInterval(interval); return; }
      addSimStep(T[lang][steps[i]], i < steps.length - 1 ? "done" : "done");
      i++;
    }, 350);
  }, 200);
}

/* ── Log ──────────────────────────────────────── */
function addLog(msg, type = "info") {
  const box = document.getElementById("logBox");
  const line = document.createElement("div");
  line.className = `log-line log-${type}`;
  const time = new Date().toLocaleTimeString("en-GB", { hour12: false });
  line.innerHTML = `<span class="log-time">${time}</span>${escHtml(msg)}`;
  box.appendChild(line);
  if (box.children.length > 200) box.removeChild(box.firstChild);
  box.scrollTop = box.scrollHeight;
}

document.getElementById("clearLogBtn")?.addEventListener("click", () => {
  document.getElementById("logBox").innerHTML = "";
});

/* ── Variable chips ───────────────────────────── */
document.querySelectorAll(".var-chip").forEach(chip => {
  chip.addEventListener("click", () => {
    const v = chip.dataset.var;
    navigator.clipboard?.writeText(v).catch(() => {});
    chip.classList.add("copied");
    setTimeout(() => chip.classList.remove("copied"), 1000);
    toast(v, "ok");
  });
});

/* ── Raw JSON ─────────────────────────────────── */
function updateRawJson() {
  const el = document.getElementById("rawJson");
  if (!el) return;
  const s = getActiveStreaming();
  el.value = JSON.stringify(s, null, 2);
}

document.getElementById("applyJsonBtn")?.addEventListener("click", async () => {
  const el = document.getElementById("rawJson");
  try {
    const parsed = JSON.parse(el.value);
    if (selectedTokenId) {
      const cfg = (settings.tokenConfigs || []).find(c => c.id === selectedTokenId);
      if (cfg) {
        cfg.streaming = parsed;
        cfg.useGlobal = false;
      }
    } else {
      settings.globalStreaming = { ...settings.globalStreaming, ...parsed };
    }
    loadFormFromSettings(getActiveStreaming());
    await saveCurrentSettings();
    toast(T[lang].applyJson + " OK", "ok");
  } catch (e) {
    toast("JSON error: " + e.message, "err");
  }
});

/* ── Toast ────────────────────────────────────── */
function toast(msg, type = "info") {
  const wrap = document.getElementById("toastWrap");
  const div  = document.createElement("div");
  div.className = `toast toast-${type === "ok" ? "ok" : type === "err" ? "err" : "info"}`;
  const svgs = {
    ok: `<svg viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    err:`<svg viewBox="0 0 14 14" fill="none"><path d="M2 2l10 10M12 2L2 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
    info:`<svg viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" stroke-width="1.3"/><path d="M7 6v4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  };
  div.innerHTML = (svgs[type] || svgs.info) + escHtml(msg);
  wrap.appendChild(div);
  setTimeout(() => { div.classList.add("toast-out"); setTimeout(() => div.remove(), 200); }, 2800);
}

/* ── Helpers ──────────────────────────────────── */
function getVal(id) { return (document.getElementById(id)?.value || "").trim(); }
function setVal(id, v) { const el = document.getElementById(id); if (el) el.value = v; }
function isURL(s) { try { new URL(s); return true; } catch { return false; } }
function maskToken(t) { const p = (t || "").split("."); return p.length < 2 ? t.slice(0, 10) + "..." : p[0] + ".**********"; }
function escHtml(s) { return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }

/* ── Test before add ──────────────────────────── */
document.getElementById("testBeforeAdd")?.addEventListener("click", testBeforeAddToken);

/* ── Guide toggle ─────────────────────────────── */
document.getElementById("guideToggle")?.addEventListener("click", () => {
  const body = document.getElementById("guideBody");
  const card = document.getElementById("guideToggle")?.closest(".guide-card");
  const open = body.style.display === "none";
  body.style.display = open ? "flex" : "none";
  if (card) card.classList.toggle("open", open);
  // Translate guide content
  if (open) {
    const keys = ["g1Title","g1Desc","g1Warn","g2Title","g2Desc","g3Title","g3Desc","g4Title","g4Desc","g5Title","g5Desc"];
    keys.forEach(key => {
      const els = document.querySelectorAll(`[data-i18n="${key}"]`);
      els.forEach(el => { if (T[lang][key]) el.textContent = T[lang][key]; });
    });
    body.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
});

/* ── Clear validation on URL change ──────────── */
document.getElementById("watchUrl")?.addEventListener("input", () => {
  clearValidation();
});

/* ── Expose globals ───────────────────────────── */
window.selectToken         = selectToken;
window.startToken          = startToken;
window.stopToken           = stopToken;
window.removeToken         = removeToken;
window.toggleTokenOverride = toggleTokenOverride;
window.testTokenById       = testTokenById;

/* ── Boot ─────────────────────────────────────── */
init();
