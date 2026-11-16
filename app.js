"use strict";

const icons = {
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.4"/><rect x="14" y="3" width="7" height="7" rx="1.4"/><rect x="3" y="14" width="7" height="7" rx="1.4"/><rect x="14" y="14" width="7" height="7" rx="1.4"/>',
  book: '<path d="M5 4a2 2 0 0 1 2-2h12v19H7a2 2 0 1 1 0-4h12M5 4v15M9 7h6M9 11h4"/>',
  chart: '<path d="M3 3v17h18M7 15l4-5 4 3 6-7"/>',
  heart: '<path d="M20.8 5.8a4.8 4.8 0 0 0-7 0L12 7.6l-1.8-1.8a4.8 4.8 0 0 0-7 6.6l1 1.1L12 21l7.8-7.5 1-1.1a4.8 4.8 0 0 0 0-6.6Z"/>',
  shield: '<path d="M12 2l8 3v6c0 5-3.6 8.4-8 11-4.4-2.6-8-6-8-11V5zM9 12l2 2 4-4"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>',
  arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  person: '<circle cx="12" cy="8" r="3"/><path d="M5 20v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11 1.5 1.5m0-14-1.5 1.5m-11 11L5 19"/>',
  spark: '<path d="M12 2c0 5.5 4.5 10 10 10-5.5 0-10 4.5-10 10 0-5.5-4.5-10-10-10 5.5 0 10-4.5 10-10Z"/>',
  wind: '<path d="M3 8h11c3 0 3-5 0-5M2 12h17c3 0 3 5 0 5h-2M5 16h6c3 0 3 5 0 5H8"/>',
  music: '<path d="M4 14v-3a8 8 0 1 1 16 0v3M4 13h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4zm16 0h-2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2z"/>',
  walk: '<circle cx="13" cy="4" r="2"/><path d="m6 12 2-3 4-1 3 4 4 1m-7-5-2 7-4 5m4-5 5 1 3 5"/>',
  pen: '<path d="m4 16-1 5 5-1L21 7l-4-4L4 16zm10-10 4 4"/>',
  lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 10v6m4-6v6"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4m8-4v4"/>',
  play: '<path d="m8 5 12 7-12 7z"/>',
  check: '<path d="m5 12 4 4L19 6"/>'
};

const moods = [
  { id: "bright", label: "开心", color: "#bf873e", face: '<path d="M8 10l1-1 1 1m4 0 1-1 1 1m-8 3c1.5 3.5 6.5 3.5 8 0"/>' },
  { id: "calm", label: "平静", color: "#668758", face: '<path d="M8.6 10h.1m6.6 0h.1M9 14c1.5 1.8 4.5 1.8 6 0"/>' },
  { id: "low", label: "低落", color: "#6c83b4", face: '<path d="M8.6 10h.1m6.6 0h.1M9 15.5c1.5-2 4.5-2 6 0"/>' },
  { id: "tense", label: "焦虑", color: "#936fb1", face: '<path d="M7.7 10 9 9.3l1.2.7m3.6 0 1.2-.7 1.3.7M8 15l2-1 2 1 2-1 2 1"/>' },
  { id: "angry", label: "烦躁", color: "#c16659", face: '<path d="m7.8 8.5 2.5 1m6-1-2.6 1M9 15.5c1.4-2 4.6-2 6 0"/>' }
];

const triggers = ["学业", "工作", "人际", "睡眠", "健康", "家庭", "财务", "社交媒体", "运动", "休息", "其他"];
const practices = {
  breath: {
    name: "呼吸冥想", category: "冥想", minutes: 2, icon: "wind",
    description: "跟着圆环，放松肩膀，把注意力带回一呼一吸。",
    steps: ["找个舒服的姿势，松开下巴和肩膀。", "跟着提示轻轻吸气，再慢慢呼气。按自己舒服的节奏来。"]
  },
  rain: {
    name: "窗边的雨声", category: "音乐", minutes: 3, icon: "music",
    description: "听一段轻柔的雨声与氛围和弦，给自己几分钟安静。",
    steps: ["把音量调到舒服的程度。", "选一个声音听一会儿。想法飘走时，可以再回来听雨声。"]
  },
  move: {
    name: "离开座位走一走", category: "运动", minutes: 5, icon: "walk",
    description: "在附近走几步，活动肩颈，看看周围有什么变化。",
    steps: ["找一段安全、方便的路线，用舒服的速度慢走。", "感受脚底的触感，留意一个你平常会略过的细节。"]
  },
  reflect: {
    name: "给自己写一句话", category: "书写", minutes: 2, icon: "pen",
    description: "想象朋友也有同样的感受，把你想对朋友说的话送给自己。",
    steps: ["在纸上或在心里接完这句话：「此刻我感到……」", "再接一句：「接下来我可以为自己做一件小事，比如……」"]
  }
};

const titles = { home: "今日", journal: "情绪日记", insights: "情绪洞察", care: "自我关怀" };
const main = document.querySelector("#main");
const dialog = document.querySelector("#dialog");
const dialogContent = document.querySelector("#dialog-content");
const modeButton = document.querySelector("#mode");
const storageKey = "mood-pause-journal-v1";
const dateShort = new Intl.DateTimeFormat("zh-CN", { month: "numeric", day: "numeric" });
const dateLong = new Intl.DateTimeFormat("zh-CN", { month: "long", day: "numeric", weekday: "long" });
const fullTime = new Intl.DateTimeFormat("zh-CN", { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
const charts = new ResizeObserver(() => drawChart());

let personal = readData();
let demoMode = personal.entries.length === 0 && personal.feedback.length === 0;
let view = "home";
let period = 7;
let moodFilter = "all";
let practiceFilter = "all";
let formState = null;
let activity = null;
let chartModel = null;
let toastTimer;
let priorFocus = null;

function readData() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (Array.isArray(saved?.entries) && Array.isArray(saved?.feedback)) return saved;
  } catch {}
  return { entries: [], feedback: [] };
}

function saveData(next) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(next));
    personal = next;
    return true;
  } catch {
    showToast("浏览器当前无法保存，请检查存储权限。");
    return false;
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function icon(name) {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + icons[name] + '</svg>';
}

function face(id) {
  const mood = moods.find(item => item.id === id);
  return '<span class="face" data-mood="' + id + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + mood.face + '</svg></span>';
}

function dayOffset(offset) {
  const date = new Date();
  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() + offset);
  return date;
}

function dayKey(date) {
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("-");
}

const demoEntries = [
  [-6, "tense", 4, ["学业", "睡眠"], "临近截止日期，昨晚一直在想作业。"],
  [-5, "low", 3, ["睡眠"], "早上醒来还有点困，没太提得起劲。"],
  [-4, "calm", 2, ["运动"], "午休出去走了走，回来舒服一些。"],
  [-3, "tense", 4, ["学业"], "复习时发现好几个知识点没弄懂。"],
  [-2, "bright", 4, ["人际", "休息"], "和朋友吃了晚饭，聊了些和考试无关的事。"],
  [-1, "calm", 3, ["运动", "休息"], "吃完饭散步，今天想早点睡。"],
  [0, "tense", 3, ["学业"], "看到下周的任务有点多，想先喘口气。"]
].map(([offset, mood, intensity, tags, note], index) => ({
  id: "demo-" + index, date: dayOffset(offset).toISOString(), mood, intensity, tags, note
}));

function entries() {
  return (demoMode ? demoEntries : personal.entries).slice().sort((a, b) => b.date.localeCompare(a.date));
}

function recent(records, days) {
  const start = dayOffset(1 - days);
  start.setHours(0, 0, 0, 0);
  const end = dayOffset(1);
  end.setHours(0, 0, 0, 0);
  return records.filter(record => new Date(record.date) >= start && new Date(record.date) < end);
}

function label(id) {
  return moods.find(item => item.id === id).label;
}

function careRecommendation() {
  const latest = entries()[0];
  const byMood = { bright: "reflect", calm: "rain", low: "move", tense: "breath", angry: "move" };
  if (!latest) return { key: "breath", reason: "从一段轻量练习开始" };
  const key = latest.tags.includes("睡眠") && ["low", "tense"].includes(latest.mood)
    ? "rain" : byMood[latest.mood];
  const helpful = demoMode ? null : personal.feedback.find(item => item.key === key && item.helpful === "helpful");
  const context = latest.tags.includes("睡眠") && key === "rain" ? " · 提到睡眠" : "";
  return { key, reason: "最近记录了「" + label(latest.mood) + "」" + context + (helpful ? " · 你觉得有帮助" : "") };
}

function sectionHead(title, subtitle, actions = "") {
  return '<div class="section-head"><div><h2>' + title + '</h2>' +
    (subtitle ? '<p>' + subtitle + '</p>' : '') + '</div>' + actions + '</div>';
}

function routeLink(destination, text) {
  return '<a class="text-link" href="#' + destination + '">' + text + icon("arrow") + '</a>';
}

function actionButton(action, text, glyph, value = "", css = "primary") {
  return '<button type="button" class="' + css + '" data-action="' + action + '" data-value="' + escapeHtml(value) + '">' + (glyph ? icon(glyph) : "") + text + '</button>';
}

function chips(values, selected, action) {
  return values.map(value => '<button type="button" class="chip" data-action="' + action + '" data-value="' + escapeHtml(value) + '" aria-pressed="' + selected.includes(value) + '">' + escapeHtml(value) + '</button>').join("");
}

function moodOptions(current = "", inForm = false) {
  return '<div class="mood-options"' + (inForm ? ' role="radiogroup" aria-label="情绪"' : "") + '>' +
    moods.map((item, index) => '<button type="button" class="mood-option" data-mood="' + item.id +
      '" data-action="' + (inForm ? "pick-mood" : "log") + '" data-value="' + item.id + '"' +
      (inForm ? ' role="radio" aria-checked="' + (current === item.id) + '" tabindex="' + ((current === item.id || (!current && index === 0)) ? "0" : "-1") + '"' : "") +
      ">" + face(item.id) + "<span>" + item.label + "</span></button>").join("") + "</div>";
}

function chartPanel(records, days, wide = false) {
  const latest = new Map();
  for (const record of records) {
    const key = dayKey(new Date(record.date));
    if (!latest.has(key)) latest.set(key, record);
  }
  const points = Array.from({ length: days }, (_, index) => {
    const date = dayOffset(index + 1 - days);
    return { date, record: latest.get(dayKey(date)) };
  });
  if (!points.some(point => point.record)) {
    return '<div class="empty">这段时间还没有记录。记下今天的感受，图表就会从这里开始。</div>';
  }
  chartModel = points;
  const summary = points.filter(point => point.record).map(point => dateShort.format(point.date) + " " + label(point.record.mood)).join("，");
  return '<div class="chart-wrap' + (wide ? " wide-chart" : "") + '"><canvas id="mood-chart" role="img" aria-label="' +
    escapeHtml(summary) + '" title="' + escapeHtml(summary) + '"></canvas></div>' +
    '<div class="chart-legend" aria-hidden="true">' + moods.map(item => '<span data-mood="' + item.id +
      '"><i class="mood-dot"></i>' + item.label + '</span>').join("") + '</div>';
}

function drawChart() {
  const canvas = document.querySelector("#mood-chart");
  if (!canvas || !chartModel) return;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  if (!width || !height) return;
  const scale = window.devicePixelRatio || 1;
  canvas.width = width * scale;
  canvas.height = height * scale;
  const context = canvas.getContext("2d");
  context.scale(scale, scale);
  const left = 36, right = width - 16, top = 13, bottom = height - 26;
  const x = index => left + 6 + index * (right - left - 6) / (chartModel.length - 1);
  const y = index => top + index * (bottom - top) / (moods.length - 1);
  context.font = '10px "PingFang SC", system-ui, sans-serif';
  context.textBaseline = "middle";
  for (let index = 0; index < moods.length; index++) {
    context.strokeStyle = "#eee1e1";
    context.setLineDash([3, 4]);
    context.beginPath();
    context.moveTo(left, y(index));
    context.lineTo(right, y(index));
    context.stroke();
    context.fillStyle = "#766573";
    context.textAlign = "left";
    context.fillText(moods[index].label, 0, y(index));
  }
  context.setLineDash([]);
  context.lineWidth = 2;
  context.strokeStyle = "#b488a5";
  context.lineJoin = "round";
  context.beginPath();
  let hasPrevious = false;
  chartModel.forEach((point, index) => {
    if (!point.record) {
      hasPrevious = false;
      return;
    }
    const level = moods.findIndex(item => item.id === point.record.mood);
    if (hasPrevious) context.lineTo(x(index), y(level));
    else context.moveTo(x(index), y(level));
    hasPrevious = true;
  });
  context.stroke();
  chartModel.forEach((point, index) => {
    if (point.record) {
      const level = moods.findIndex(item => item.id === point.record.mood);
      context.beginPath();
      context.arc(x(index), y(level), 5, 0, 2 * Math.PI);
      context.fillStyle = moods[level].color;
      context.fill();
      context.strokeStyle = "#fffcfa";
      context.stroke();
    }
    const step = chartModel.length === 7 ? (width < 360 ? 2 : 1) : (width < 500 ? 7 : 4);
    if ((index % step === 0 && index < chartModel.length - 2) || index === chartModel.length - 1 || (step === 1 && index === chartModel.length - 2)) {
      context.fillStyle = "#766573";
      context.textAlign = index === chartModel.length - 1 ? "right" : "center";
      context.fillText(dateShort.format(point.date), index === chartModel.length - 1 ? width : x(index), height - 8);
    }
  });
}

function careGraphic(key) {
  return '<span class="care-graphic" data-care="' + key + '">' + icon(practices[key].icon) + '</span>';
}

function careStrip(key, featured, reason = "") {
  const item = practices[key];
  return '<div class="' + (featured ? "care-feature" : "care-short") + '">' + careGraphic(key) +
    '<div><strong>' + item.name + '</strong><small>' + item.minutes + ' 分钟 · ' + (reason || item.category) +
    '</small></div><button type="button" class="round-arrow" data-action="practice" data-value="' + key +
    '" aria-label="开始' + item.name + '">' + icon(featured ? "play" : "chevron") + '</button></div>';
}

function journalRows(records, editable = false) {
  if (!records.length) return '<p class="empty">这里还没有记录。</p>';
  return records.map(record => '<article class="journal-row">' + face(record.mood) +
    '<div><strong>' + label(record.mood) + '</strong><span class="journal-meta">' +
    escapeHtml(fullTime.format(new Date(record.date))) + ' · 强度 ' + record.intensity + '/5</span>' +
    (record.note ? '<p class="journal-note">' + escapeHtml(record.note) + '</p>' : '') +
    (record.tags.length ? '<div class="filter-row">' + record.tags.map(tag => '<span class="chip tag">' + escapeHtml(tag) + '</span>').join("") + '</div>' : '') +
    '</div>' + (editable ?
      '<div class="row-actions">' + actionButton("edit", '<span class="sr-only">编辑记录</span>', "pen", record.id, "icon-button") +
      actionButton("delete", '<span class="sr-only">删除记录</span>', "trash", record.id, "icon-button") + '</div>' : '') + '</article>').join("");
}

function homePage() {
  const records = entries();
  const date = new Date();
  const suggestion = careRecommendation();
  const rest = Object.keys(practices).filter(key => key !== suggestion.key && key !== "reflect").slice(0, 2);
  return '<section class="hero"><div class="hero-art" aria-hidden="true"></div><div class="hero-body">' +
    '<div class="eyebrow">' + icon("sun") + escapeHtml(dateLong.format(date)) + '</div><h1>今天，给情绪留一点白</h1>' +
    '<p>记下此刻的感受，也给自己几分钟喘息。</p>' +
    actionButton("log", "记录此刻", "plus") + '</div></section>' +
    '<section class="surface">' + sectionHead("此刻的情绪", "点选一个最接近的感受") + moodOptions() + '</section>' +
    '<div class="overview"><section class="surface">' + sectionHead("最近 7 天的情绪", demoMode ? "示例数据 · 每天显示最后一次记录" : "每天显示最后一次记录", routeLink("insights", "查看洞察")) +
    chartPanel(recent(records, 7), 7) + '</section><section class="surface">' + sectionHead("给此刻的练习", "", routeLink("care", "全部练习")) +
    careStrip(suggestion.key, true, suggestion.reason) + rest.map(key => careStrip(key, false)).join("") + '</section></div>' +
    '<section class="surface bottom-card">' + sectionHead("最近的日记", demoMode ? "示例记录" : "", routeLink("journal", "查看日记")) + journalRows(records.slice(0, 2)) + '</section>';
}

function subpage(title, description) {
  return '<div class="subpage"><h1>' + title + '</h1><p>' + description + '</p></div>';
}

function journalPage() {
  const records = entries();
  const filtered = moodFilter === "all" ? records : records.filter(record => label(record.mood) === moodFilter);
  return '<div class="subpage-actions">' + subpage("情绪日记", demoMode ? "正在查看示例日记。你写的新记录会保存在「我的记录」。" : "回看当时的情绪、强度和发生的事。") +
    actionButton("log", "写日记", "plus") + '</div>' +
    '<section class="surface">' + sectionHead("情绪记录", filtered.length + " 条") +
    '<div class="filter-row" aria-label="按情绪筛选">' + chips(["all", ...moods.map(item => item.label)], [moodFilter], "journal-filter").replace(">all</button>", ">全部</button>") + '</div>' +
    journalRows(filtered, !demoMode) + '</section>';
}

function triggerStats(records) {
  const totals = new Map();
  for (const record of records) {
    for (const tag of record.tags) {
      if (!totals.has(tag)) totals.set(tag, []);
      totals.get(tag).push(record);
    }
  }
  return Array.from(totals).sort((a, b) => b[1].length - a[1].length || triggers.indexOf(a[0]) - triggers.indexOf(b[0]));
}

function insightsPage() {
  const records = recent(entries(), period);
  const stats = triggerStats(records);
  let insight = "给记录加几个情境标签，就能回顾哪些事件经常和某种情绪一起出现。";
  let detail = "";
  if (stats.length) {
    const [tag, linked] = stats[0];
    const counts = moods.map(mood => [mood.label, linked.filter(item => item.mood === mood.id).length]).filter(pair => pair[1] > 0).sort((a, b) => b[1] - a[1]);
    const most = counts.filter(pair => pair[1] === counts[0][1]).map(pair => "「" + pair[0] + "」").join("、");
    insight = records.length < 3
      ? "你标记过「" + tag + "」。多记几次，才更容易比较相似的情境。"
      : "有 " + linked.length + " 条记录提到「" + tag + "」，其中出现最多的是" + most + "。可以回看这些记录，留意当时有哪些相似的情境。";
    detail = '<div class="insight-data">' + counts.map(([emotion, count]) => '<span>' + emotion + ' ' + count + ' 次</span>').join("") + '</div>';
  }
  const bars = stats.length ? stats.slice(0, 6).map(([tag, linked]) =>
    '<div class="trigger-row"><div class="trigger-label"><strong>' + escapeHtml(tag) + '</strong><span>' + linked.length +
    ' 次</span></div><div class="bar" aria-hidden="true"><span style="width:' + Math.round(100 * linked.length / records.length) + '%"></span></div></div>').join("") :
    '<p class="empty">这段时间还没有情境标签。</p>';
  return subpage("情绪洞察", "看看什么情境常和某种感受一起出现。") +
    '<div class="section-stack"><section class="surface">' +
    sectionHead("情绪趋势", (demoMode ? "示例数据 · " : "") + records.length + " 条记录 · 每天显示最后一次记录",
      '<div class="filter-row" aria-label="时间范围">' + chips(["7", "30"], [String(period)], "period").replace(">7</button>", ">7 天</button>").replace(">30</button>", ">30 天</button>") + '</div>') +
    chartPanel(records, period, true) + '</section><div class="insight-grid"><section class="surface">' +
    sectionHead("常见触发因素", "按标签出现次数排列。一条日记可标记多个因素。") + bars + '</section>' +
    '<section class="surface">' + sectionHead("一起出现的情绪", "仅基于你主动标记的情境") +
    '<p class="insight-text">' + escapeHtml(insight) + '</p>' + detail + '<p class="helper">标签与情绪一起出现，并不能确定情绪由它引起。</p>' +
    '</section></div></div>';
}

function carePage() {
  const recommendation = careRecommendation();
  const ordered = [recommendation.key, ...Object.keys(practices).filter(key => key !== recommendation.key)];
  const visible = ordered.filter(key => practiceFilter === "全部" || practices[key].category === practiceFilter);
  const feedback = demoMode ? [] : personal.feedback.slice(0, 5);
  return subpage("自我关怀", "挑一个当下做得到的小练习，按自己的节奏开始。") +
    '<div class="section-stack"><section class="surface">' +
    sectionHead("为此刻推荐", (demoMode ? "示例建议 · " : "") + recommendation.reason) +
    careStrip(recommendation.key, true) + '</section><section>' +
    '<div class="section-head"><h2>练习库</h2><div class="filter-row" aria-label="练习类型">' +
    chips(["全部", "冥想", "音乐", "运动", "书写"], [practiceFilter], "care-filter") + '</div></div>' +
    '<div class="care-grid">' + visible.map(key => {
      const item = practices[key];
      return '<article class="surface care-card">' + careGraphic(key) +
        '<div><div class="care-meta">' + item.category + ' · ' + item.minutes + ' 分钟</div><h2>' + item.name +
        '</h2></div><p>' + item.description + '</p>' + actionButton("practice", "开始练习", "arrow", key, "secondary") + '</article>';
    }).join("") + '</div></section>' +
    (feedback.length ? '<section class="surface">' + sectionHead("练习回顾", "记住哪些方法对你有用") +
      '<div class="feedback-list">' + feedback.map(item => '<div class="feedback-row"><span>' +
        practices[item.key].name + ' · ' + escapeHtml(dateShort.format(new Date(item.date))) +
        '</span><strong>' + (item.helpful === "helpful" ? "有帮助" : "暂时没感觉") + '</strong></div>').join("") + '</div></section>' : '') +
    '</div>';
}

function render() {
  chartModel = null;
  charts.disconnect();
  const pages = { home: homePage, journal: journalPage, insights: insightsPage, care: carePage };
  document.querySelector("#crumb").textContent = titles[view];
  document.querySelectorAll("[data-nav]").forEach(link => {
    if (link.dataset.nav === view) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  modeButton.setAttribute("aria-pressed", String(demoMode));
  modeButton.innerHTML = icon(demoMode ? "spark" : "lock") + (demoMode ? "示例模式" : "我的记录");
  modeButton.title = demoMode ? "切换到我的记录" : "切换到示例模式";
  main.innerHTML = pages[view]();
  const canvas = document.querySelector("#mood-chart");
  if (canvas) charts.observe(canvas);
}

function updateView() {
  const hash = location.hash.slice(1);
  if (hash === "main") {
    main.focus();
    return;
  }
  view = Object.hasOwn(titles, hash) ? hash : "home";
  if (view === "care" && practiceFilter === "all") practiceFilter = "全部";
  render();
  window.scrollTo(0, 0);
}

function renderAndFocus(action, value) {
  render();
  main.querySelector('[data-action="' + action + '"][data-value="' + CSS.escape(value) + '"]')?.focus();
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
}

function openDialog(title, subtitle, content) {
  dialogContent.innerHTML = '<div class="dialog-panel"><div class="dialog-header"><div><h2 id="dialog-title">' +
    title + '</h2>' + (subtitle ? '<p class="helper">' + subtitle + '</p>' : '') + '</div>' +
    actionButton("close", '<span class="sr-only">关闭</span>', "close", "", "icon-button") + '</div>' + content + '</div>';
  if (!dialog.open) {
    priorFocus = document.activeElement;
    dialog.showModal();
  } else {
    dialogContent.querySelector("button")?.focus();
  }
}

function openForm(mood = "", record = null) {
  formState = { record, mood: record?.mood ?? mood, tags: [...(record?.tags || [])] };
  const intensity = record?.intensity ?? 3;
  const note = record?.note ?? "";
  openDialog(record ? "编辑这条日记" : "记下此刻的情绪", "只选一个情绪就可以保存，其余按需填写。",
    '<form id="log-form" autocomplete="off"><fieldset><legend>你此刻的感受</legend>' + moodOptions(formState.mood, true) +
    '</fieldset><fieldset><legend>感受有多强烈 <output id="intensity-value">' + intensity + '/5</output></legend>' +
    '<div class="intensity"><span class="helper">轻微</span><input type="range" name="intensity" aria-label="情绪强度" min="1" max="5" value="' + intensity +
    '"><span class="helper">强烈</span></div></fieldset><fieldset><legend>可能跟什么有关？<span class="helper"> 可多选</span></legend>' +
    '<div class="filter-row">' + chips(triggers, formState.tags, "tag") + '</div></fieldset>' +
    '<label for="note" class="field-label">发生了什么？ <span class="helper">选填</span></label><textarea id="note" name="note" maxlength="500" placeholder="比如，复习到一半有点着急……">' +
    escapeHtml(note) + '</textarea><div id="char-count" class="helper char-count">' + note.length + '/500</div>' +
    '<p id="form-error" class="form-error" role="alert"></p><div class="dialog-actions"><span class="helper">保存在此浏览器</span>' +
    actionButton("close", "取消", "", "", "secondary") + '<button type="submit" class="primary">保存日记</button></div></form>');
  dialogContent.querySelector('[role="radio"][tabindex="0"]').focus();
}

function pickMood(button) {
  formState.mood = button.dataset.value;
  dialogContent.querySelector("#form-error").textContent = "";
  for (const choice of dialogContent.querySelectorAll('[role="radio"]')) {
    choice.setAttribute("aria-checked", String(choice === button));
    choice.tabIndex = choice === button ? 0 : -1;
  }
}

function saveEntry(event) {
  if (event.target.id !== "log-form") return;
  event.preventDefault();
  if (!formState?.mood) {
    dialogContent.querySelector("#form-error").textContent = "请先选择一个情绪。";
    dialogContent.querySelector('[role="radio"][tabindex="0"]').focus();
    return;
  }
  const fields = new FormData(event.target);
  const editing = formState.record;
  const record = {
    id: editing?.id ?? crypto.randomUUID(),
    date: editing?.date ?? new Date().toISOString(),
    mood: formState.mood,
    intensity: Number(fields.get("intensity")),
    tags: formState.tags,
    note: String(fields.get("note")).trim()
  };
  const updatedEntries = editing
    ? personal.entries.map(item => item.id === record.id ? record : item)
    : [record, ...personal.entries];
  if (!saveData({ ...personal, entries: updatedEntries })) {
    dialogContent.querySelector("#form-error").textContent = "保存失败。请检查浏览器存储权限后重试。";
    return;
  }
  demoMode = false;
  moodFilter = "all";
  dialog.close();
  render();
  showToast(editing ? "已更新日记" : "已保存。练习推荐已根据这次记录更新。");
}

function openMode() {
  openDialog("查看哪一组记录？", "示例日记可以体验情绪洞察。个人日记独立保存在此浏览器。",
    '<div class="dialog-actions">' + actionButton("set-mode", "查看示例", "spark", "demo", "secondary") +
    actionButton("set-mode", "查看我的记录", "lock", "personal") + '</div>');
}

function openPrivacy() {
  openDialog("隐私与数据", "", '<div class="privacy-copy"><p>你的日记与练习反馈只保存在当前浏览器。网站无需登录，也不会上传这些记录。</p>' +
    '<p>换设备、使用无痕窗口或清理浏览器数据后，原来的记录可能无法访问。</p>' +
    '<p>留白用于日常记录与自我关怀。持续感到困扰时，可以联系可信赖的人或寻求专业支持。</p></div>' +
    '<div class="dialog-actions">' + actionButton("clear", "清除本机数据", "trash", "", "secondary danger") +
    actionButton("close", "完成", "", "", "primary") + '</div>');
}

function openDelete(id) {
  openDialog("删除这条日记？", "删除后无法恢复。",
    '<div class="dialog-actions">' + actionButton("close", "取消", "", "", "secondary") +
    actionButton("confirm-delete", "删除日记", "trash", id, "primary") + '</div>');
}

function displayTime(seconds) {
  return String(Math.floor(seconds / 60)).padStart(2, "0") + ":" + String(seconds % 60).padStart(2, "0");
}

function openPractice(key) {
  const item = practices[key];
  stopPractice();
  activity = { key, remaining: item.minutes * 60, interval: null, end: null, sound: null };
  openDialog(item.name, item.category + " · " + item.minutes + " 分钟",
    '<div class="timer-board">' + (key === "breath" ? '<div id="orb" class="breath-orb" aria-hidden="true"></div>' : careGraphic(key)) +
    '<div id="timer" class="timer-value">' + displayTime(activity.remaining) + '</div><div id="phase" class="helper">准备好了就开始</div></div>' +
    '<ol class="care-instructions">' + item.steps.map(step => '<li>' + step + '</li>').join("") + '</ol>' +
    '<div class="dialog-actions"><p class="helper" id="sound-status"></p>' + actionButton("finish", "结束并反馈", "", "", "secondary") +
    actionButton("toggle-timer", "开始", "", "", "primary") + '</div>');
}

function startSound(current) {
  const Audio = window.AudioContext || window.webkitAudioContext;
  if (!Audio) return;
  let context;
  try {
    context = new Audio();
    const buffer = context.createBuffer(1, 4 * context.sampleRate, context.sampleRate);
    const wave = buffer.getChannelData(0);
    let last = 0;
    for (let index = 0; index < wave.length; index++) {
      last = 0.91 * last + 0.09 * (2 * Math.random() - 1);
      wave[index] = last;
    }
    const rain = context.createBufferSource();
    rain.buffer = buffer;
    rain.loop = true;
    const bass = context.createBiquadFilter();
    bass.type = "lowpass";
    bass.frequency.value = 1300;
    const master = context.createGain();
    master.gain.value = 0.25;
    rain.connect(bass).connect(master);
    master.connect(context.destination);
    rain.start();
    for (const frequency of [130.81, 196, 261.63, 329.63]) {
      const tone = context.createOscillator();
      tone.frequency.value = frequency;
      const toneGain = context.createGain();
      toneGain.gain.value = 0.035;
      tone.connect(toneGain).connect(master);
      tone.start();
    }
    current.sound = context;
    context.resume().catch(() => {
      if (activity === current) dialogContent.querySelector("#sound-status").textContent = "声音播放受浏览器限制";
    });
  } catch {
    context?.close().catch(() => {});
    dialogContent.querySelector("#sound-status").textContent = "当前浏览器无法播放声音";
  }
}

function pausePractice(current) {
  clearInterval(current.interval);
  current.interval = null;
  if (current.sound) {
    current.sound.close().catch(() => {});
    current.sound = null;
  }
  dialogContent.querySelector("#orb")?.classList.remove("running");
}

function stopPractice() {
  if (activity) pausePractice(activity);
  activity = null;
}

function updateTimer(current) {
  current.remaining = Math.max(0, Math.ceil((current.end - Date.now()) / 1000));
  dialogContent.querySelector("#timer").textContent = displayTime(current.remaining);
  if (!current.remaining) {
    finishPractice();
    return;
  }
  const phase = dialogContent.querySelector("#phase");
  if (current.key === "breath") {
    const elapsed = practices.breath.minutes * 60 - current.remaining;
    phase.textContent = elapsed % 10 < 4 ? "轻轻吸气" : "慢慢呼气";
  } else {
    phase.textContent = "练习中";
  }
}

function toggleTimer(button) {
  if (!activity) return;
  const current = activity;
  if (current.interval) {
    updateTimer(current);
    if (activity !== current) return;
    pausePractice(current);
    dialogContent.querySelector("#phase").textContent = "已暂停";
    button.textContent = "继续";
    return;
  }
  current.end = Date.now() + current.remaining * 1000;
  current.interval = setInterval(() => updateTimer(current), 150);
  if (current.key === "rain") startSound(current);
  const orb = dialogContent.querySelector("#orb");
  if (orb) {
    orb.style.animationDelay = "-" + ((practices.breath.minutes * 60 - current.remaining) % 10) + "s";
    orb.classList.add("running");
  }
  button.textContent = "暂停";
  updateTimer(current);
}

function finishPractice() {
  if (!activity) return;
  const key = activity.key;
  const finished = activity.remaining === 0;
  stopPractice();
  openDialog(finished ? "练习结束" : "给自己留了片刻",
    "这次「" + practices[key].name + "」对你有帮助吗？",
    '<div class="dialog-actions">' + actionButton("close", "跳过", "", "", "secondary") +
    actionButton("feedback", "暂时没感觉", "", key + ":neutral", "secondary") +
    actionButton("feedback", "有帮助", "check", key + ":helpful") + '</div>');
}

document.querySelectorAll("[data-icon]").forEach(node => node.innerHTML = icon(node.dataset.icon));
window.addEventListener("hashchange", updateView);
dialog.addEventListener("close", () => {
  stopPractice();
  formState = null;
  if (priorFocus?.isConnected) priorFocus.focus();
  else main.focus({ preventScroll: true });
  priorFocus = null;
});

document.addEventListener("submit", saveEntry);
dialog.addEventListener("input", event => {
  if (event.target.name === "intensity") dialogContent.querySelector("#intensity-value").value = event.target.value + "/5";
  if (event.target.name === "note") dialogContent.querySelector("#char-count").textContent = event.target.value.length + "/500";
});
dialog.addEventListener("keydown", event => {
  if (event.target.dataset.action !== "pick-mood") return;
  const direction = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
  if (!direction) return;
  event.preventDefault();
  const buttons = Array.from(dialogContent.querySelectorAll('[role="radio"]'));
  const next = buttons[(buttons.indexOf(event.target) + direction + buttons.length) % buttons.length];
  pickMood(next);
  next.focus();
});
document.addEventListener("click", event => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const { action, value } = button.dataset;
  switch (action) {
    case "mode": openMode(); break;
    case "set-mode":
      demoMode = value === "demo";
      moodFilter = "all";
      dialog.close();
      render();
      showToast(demoMode ? "正在查看示例" : "正在查看我的记录");
      break;
    case "log": openForm(value); break;
    case "pick-mood": pickMood(button); break;
    case "tag": {
      const selected = formState.tags.includes(value);
      formState.tags = selected ? formState.tags.filter(tag => tag !== value) : [...formState.tags, value];
      button.setAttribute("aria-pressed", String(!selected));
      break;
    }
    case "edit": {
      const record = personal.entries.find(item => item.id === value);
      if (record) openForm("", record);
      break;
    }
    case "delete": openDelete(value); break;
    case "confirm-delete":
      if (saveData({ ...personal, entries: personal.entries.filter(item => item.id !== value) })) {
        dialog.close();
        render();
        showToast("已删除这条日记");
      }
      break;
    case "journal-filter": moodFilter = value; renderAndFocus(action, value); break;
    case "period": period = Number(value); renderAndFocus(action, value); break;
    case "care-filter": practiceFilter = value; renderAndFocus(action, value); break;
    case "practice": openPractice(value); break;
    case "toggle-timer": toggleTimer(button); break;
    case "finish": finishPractice(); break;
    case "feedback": {
      if (demoMode) {
        dialog.close();
        showToast("已体验反馈。「我的记录」模式可保存练习反馈。");
        break;
      }
      const [key, helpful] = value.split(":");
      if (saveData({ ...personal, feedback: [{ key, helpful, date: new Date().toISOString() }, ...personal.feedback] })) {
        dialog.close();
        render();
        showToast("已保存练习反馈");
      }
      break;
    }
    case "privacy": openPrivacy(); break;
    case "clear":
      openDialog("清除本机数据？", "此浏览器中的所有日记与练习反馈都会删除。",
        '<div class="dialog-actions">' + actionButton("privacy", "取消", "", "", "secondary") +
        actionButton("confirm-clear", "清除全部数据", "trash", "", "primary") + '</div>');
      break;
    case "confirm-clear":
      if (saveData({ entries: [], feedback: [] })) {
        demoMode = false;
        moodFilter = "all";
        dialog.close();
        render();
        showToast("已清除本机记录");
      }
      break;
    case "close": dialog.close(); break;
  }
});

updateView();
