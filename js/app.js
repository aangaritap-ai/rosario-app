import { MISTERIOS, DIA_A_MISTERIO } from "../data/rosario.js";
import { NOVENAS } from "../data/novenas.js";
import { buildRosarioSteps, todayWeekdayKey } from "./rosario-builder.js";
import { buildNovenaDaySteps } from "./novena-builder.js";
import { PrayerPlayer } from "./pray-player.js";
import { voiceEngine, listSpanishVoices } from "./voice-engine.js";
import { setupInstallPrompt } from "./pwa-install.js";

const app = document.getElementById("app");
let activePlayer = null;

function applyThemeColorMeta(isDark) {
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", isDark ? "#050e1c" : "#0e2a4d");
}

const storedTheme = localStorage.getItem("rosario_theme");
if (storedTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
}
applyThemeColorMeta(storedTheme === "dark");

function stopActivePlayer() {
  if (activePlayer) {
    activePlayer.destroy();
    activePlayer = null;
  }
}

function navigate(hash) {
  window.location.hash = hash;
}

function parseHash() {
  const raw = window.location.hash.replace(/^#\/?/, "");
  const [path, query] = raw.split("?");
  const parts = path.split("/").filter(Boolean);
  const params = new URLSearchParams(query || "");
  return { parts, params };
}

function header(title, backHash) {
  return `
    <header class="topbar">
      ${backHash ? `<button class="btn-back" data-back="${backHash}">‹</button>` : `<span class="topbar-spacer"></span>`}
      <h1>${title}</h1>
      <button class="btn-icon" data-nav="#/ajustes" aria-label="Ajustes">⚙</button>
    </header>
  `;
}

function attachTopbarEvents(root) {
  const back = root.querySelector("[data-back]");
  if (back) back.addEventListener("click", () => navigate(back.dataset.back));
  root.querySelectorAll("[data-nav]").forEach((el) =>
    el.addEventListener("click", () => navigate(el.dataset.nav))
  );
}

function renderHome() {
  stopActivePlayer();
  const hoy = todayWeekdayKey();
  const misterioHoy = MISTERIOS[DIA_A_MISTERIO[hoy]];
  const enCurso = getLastActiveNovenaEnCurso();
  app.innerHTML = `
    <div class="view view-home">
      <button class="btn-icon settings-fab" data-nav="#/ajustes" aria-label="Ajustes">⚙</button>
      <div class="home-hero">
        <img src="images/virgen-hero.svg" alt="Virgen del Rosario" class="home-hero-img" />
        <div class="home-hero-overlay"></div>
      </div>
      <div class="home-content">
        <p class="home-kicker">Hoy corresponden los</p>
        <h2 class="home-misterio-hoy">${misterioHoy.nombre}</h2>
        <button class="btn-primary btn-rosario" data-nav="#/rosario">🌹 Rezar el Rosario</button>
        <button class="btn-secondary" data-nav="#/novenas">📖 Novenas</button>
        ${
          enCurso
            ? `<button class="home-continue" data-nav="#/novena/${enCurso.novena.id}/rezar?d=${enCurso.dia}">
                <span class="home-continue-icon">↪</span>
                <span class="home-continue-text">
                  <span class="home-continue-label">Continuar</span>
                  <span class="home-continue-title">${enCurso.novena.titulo} · Día ${enCurso.dia + 1}</span>
                </span>
              </button>`
            : ""
        }
      </div>
    </div>
  `;
  app.querySelectorAll("[data-nav]").forEach((el) =>
    el.addEventListener("click", () => navigate(el.dataset.nav))
  );
}

function renderRosarioSetup() {
  stopActivePlayer();
  const hoy = todayWeekdayKey();
  const sugerido = DIA_A_MISTERIO[hoy];
  const opciones = Object.entries(MISTERIOS)
    .map(
      ([key, m]) => `
      <label class="radio-card ${key === sugerido ? "radio-card-suggested" : ""}">
        <input type="radio" name="misterio" value="${key}" ${key === sugerido ? "checked" : ""} />
        <span>${m.nombre}${key === sugerido ? " · sugerido para hoy" : ""}</span>
      </label>`
    )
    .join("");

  app.innerHTML = `
    <div class="view">
      ${header("Rezar el Rosario", "#/")}
      <div class="view-content">
        <p class="section-label">Elige los misterios</p>
        <div class="radio-group">${opciones}</div>
        <label class="checkbox-row">
          <input type="checkbox" id="chk-letanias" />
          <span>Incluir Letanías al final</span>
        </label>
        <button class="btn-primary" id="btn-empezar">Comenzar</button>
      </div>
    </div>
  `;
  attachTopbarEvents(app);
  app.querySelector("#btn-empezar").addEventListener("click", () => {
    const key = app.querySelector('input[name="misterio"]:checked').value;
    const letanias = app.querySelector("#chk-letanias").checked;
    navigate(`#/rosario/rezar?m=${key}&l=${letanias ? "1" : "0"}`);
  });
}

function renderRosarioPray(params) {
  stopActivePlayer();
  const key = params.get("m") || DIA_A_MISTERIO[todayWeekdayKey()];
  const incluirLetanias = params.get("l") === "1";
  const steps = buildRosarioSteps(key, { incluirLetanias });

  app.innerHTML = `
    <div class="view">
      ${header(MISTERIOS[key].nombre, "#/rosario")}
      <div class="view-content" id="player-mount"></div>
    </div>
  `;
  attachTopbarEvents(app);
  const mount = app.querySelector("#player-mount");
  activePlayer = new PrayerPlayer(mount, steps, {
    onFinish: () => {
      mount.insertAdjacentHTML(
        "beforeend",
        `<div class="finish-banner">🌹 Has terminado el Santo Rosario. ¡Que la Virgen te bendiga!</div>`
      );
    },
  });
}

function renderNovenasList() {
  stopActivePlayer();
  const cards = NOVENAS.map(
    (n) => `
    <button class="novena-card" data-nav="#/novena/${n.id}" style="--novena-color:${n.color}">
      <img src="${n.imagen}" alt="${n.titulo}" />
      <div class="novena-card-info">
        <h3>${n.titulo}</h3>
        <p>${n.subtitulo}</p>
      </div>
    </button>`
  ).join("");

  app.innerHTML = `
    <div class="view">
      ${header("Novenas", "#/")}
      <div class="view-content novenas-grid">${cards}</div>
    </div>
  `;
  attachTopbarEvents(app);
  app.querySelectorAll("[data-nav]").forEach((el) =>
    el.addEventListener("click", () => navigate(el.dataset.nav))
  );
}

function novenaProgressKey(novenaId) {
  return `novena_progreso_${novenaId}`;
}

function getNovenaProgress(novenaId) {
  try {
    return parseInt(localStorage.getItem(novenaProgressKey(novenaId)) || "0", 10);
  } catch (e) {
    return 0;
  }
}

function setNovenaProgress(novenaId, diaCompletado) {
  try {
    const actual = getNovenaProgress(novenaId);
    if (diaCompletado > actual) {
      localStorage.setItem(novenaProgressKey(novenaId), String(diaCompletado));
    }
  } catch (e) {
    /* si no hay almacenamiento disponible, seguimos sin recordar progreso */
  }
}

function setLastActiveNovena(novenaId) {
  try {
    localStorage.setItem("rosario_last_novena", novenaId);
  } catch (e) {
    /* sin almacenamiento disponible, no persistimos el acceso directo */
  }
}

function getLastActiveNovenaEnCurso() {
  let lastId;
  try {
    lastId = localStorage.getItem("rosario_last_novena");
  } catch (e) {
    return null;
  }
  if (!lastId) return null;
  const novena = NOVENAS.find((n) => n.id === lastId);
  if (!novena) return null;
  const progreso = getNovenaProgress(lastId);
  if (progreso >= novena.dias.length) return null; // ya la terminó
  return { novena, dia: progreso };
}

function renderNovenaDetail(novenaId) {
  stopActivePlayer();
  const novena = NOVENAS.find((n) => n.id === novenaId);
  if (!novena) return navigate("#/novenas");
  const progreso = getNovenaProgress(novenaId);

  const dias = novena.dias
    .map((dia, i) => {
      const disponible = i <= progreso;
      return `
      <button class="day-pill ${disponible ? "" : "day-pill-locked"}" data-dia="${i}" ${disponible ? "" : "disabled"}>
        Día ${i + 1}${i < progreso ? " ✓" : ""}
      </button>`;
    })
    .join("");

  app.innerHTML = `
    <div class="view">
      ${header(novena.titulo, "#/novenas")}
      <div class="view-content">
        <img src="${novena.imagen}" alt="${novena.titulo}" class="novena-detail-img" />
        <p class="novena-detail-subtitulo">${novena.subtitulo}</p>
        <p class="section-label">Elige el día a rezar</p>
        <div class="day-grid">${dias}</div>
      </div>
    </div>
  `;
  attachTopbarEvents(app);
  app.querySelectorAll(".day-pill:not(.day-pill-locked)").forEach((btn) =>
    btn.addEventListener("click", () => navigate(`#/novena/${novenaId}/rezar?d=${btn.dataset.dia}`))
  );
}

function renderNovenaPray(novenaId, params) {
  stopActivePlayer();
  const novena = NOVENAS.find((n) => n.id === novenaId);
  if (!novena) return navigate("#/novenas");
  const diaIndex = Math.min(parseInt(params.get("d") || "0", 10), novena.dias.length - 1);
  const steps = buildNovenaDaySteps(novena, diaIndex);
  setLastActiveNovena(novenaId);

  app.innerHTML = `
    <div class="view">
      ${header(`Día ${diaIndex + 1}`, `#/novena/${novenaId}`)}
      <div class="view-content" id="player-mount"></div>
    </div>
  `;
  attachTopbarEvents(app);
  const mount = app.querySelector("#player-mount");
  activePlayer = new PrayerPlayer(mount, steps, {
    onFinish: () => {
      setNovenaProgress(novenaId, diaIndex + 1);
      mount.insertAdjacentHTML(
        "beforeend",
        `<div class="finish-banner">🙏 Día ${diaIndex + 1} completado.</div>`
      );
    },
  });
}

async function renderAjustes() {
  stopActivePlayer();
  const voces = await listSpanishVoices();
  const actual = localStorage.getItem("rosario_voice_name") || "";
  const opciones = voces
    .map((v) => `<option value="${v.name}" ${v.name === actual ? "selected" : ""}>${v.name} (${v.lang})</option>`)
    .join("");

  const temaOscuro = document.documentElement.getAttribute("data-theme") === "dark";

  app.innerHTML = `
    <div class="view">
      ${header("Ajustes", "#/")}
      <div class="view-content">
        <p class="section-label">Apariencia</p>
        <label class="checkbox-row">
          <input type="checkbox" id="chk-tema-oscuro" ${temaOscuro ? "checked" : ""} />
          <span>🌙 Modo nocturno (para rezar antes de dormir)</span>
        </label>
        <p class="section-label">Voz del teléfono (para novenas y meditaciones)</p>
        ${
          voces.length
            ? `<select id="sel-voice" class="select-voice">
                <option value="">Automática (recomendada)</option>
                ${opciones}
               </select>`
            : `<p class="hint-text">Tu navegador no reportó voces en español todavía. Prueba a reproducir cualquier oración primero.</p>`
        }
        <button class="btn-secondary" id="btn-probar-voz">🔊 Probar voz</button>
        <p class="section-label">Velocidad</p>
        <input type="range" min="0.7" max="1.15" step="0.01" value="${voiceEngine.rate}" id="rng-rate" />
        <p class="hint-text">Sobre la app: usa una voz de Inteligencia Artificial pregrabada para las oraciones principales del Rosario, y la voz de tu teléfono para las novenas.</p>
      </div>
    </div>
  `;
  attachTopbarEvents(app);
  app.querySelector("#chk-tema-oscuro").addEventListener("change", (e) => {
    const oscuro = e.target.checked;
    document.documentElement.setAttribute("data-theme", oscuro ? "dark" : "light");
    applyThemeColorMeta(oscuro);
    try {
      localStorage.setItem("rosario_theme", oscuro ? "dark" : "light");
    } catch (err) {
      /* sin almacenamiento disponible, el tema no se recordará entre visitas */
    }
  });
  const sel = app.querySelector("#sel-voice");
  if (sel) {
    sel.addEventListener("change", () => voiceEngine.setPreferredVoice(sel.value || null));
  }
  app.querySelector("#rng-rate").addEventListener("input", (e) => voiceEngine.setRate(parseFloat(e.target.value)));
  app.querySelector("#btn-probar-voz").addEventListener("click", () => {
    voiceEngine.speak("Dios te salve, María, llena eres de gracia, el Señor es contigo.", {});
  });
}

function render() {
  const { parts, params } = parseHash();
  if (parts.length === 0) return renderHome();
  if (parts[0] === "rosario" && parts[1] === "rezar") return renderRosarioPray(params);
  if (parts[0] === "rosario") return renderRosarioSetup();
  if (parts[0] === "novenas") return renderNovenasList();
  if (parts[0] === "novena" && parts[2] === "rezar") return renderNovenaPray(parts[1], params);
  if (parts[0] === "novena") return renderNovenaDetail(parts[1]);
  if (parts[0] === "ajustes") return renderAjustes();
  return renderHome();
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", () => {
  render();
  setupInstallPrompt();
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  }
});
