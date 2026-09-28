// Motor de voz unificado:
// 1) Si existe un audio pregrabado (ElevenLabs) para ese texto, lo reproduce.
// 2) Si no existe (o falla), usa la voz del teléfono (Web Speech API),
//    intentando elegir la mejor voz femenina en español disponible.

let cachedVoices = [];
let voicesReady = false;

function loadVoices() {
  return new Promise((resolve) => {
    const voices = speechSynthesis.getVoices();
    if (voices.length) {
      cachedVoices = voices;
      voicesReady = true;
      resolve(voices);
      return;
    }
    speechSynthesis.addEventListener(
      "voiceschanged",
      () => {
        cachedVoices = speechSynthesis.getVoices();
        voicesReady = true;
        resolve(cachedVoices);
      },
      { once: true }
    );
    // Fallback por si el navegador nunca dispara voiceschanged.
    setTimeout(() => {
      if (!voicesReady) {
        cachedVoices = speechSynthesis.getVoices();
        resolve(cachedVoices);
      }
    }, 1000);
  });
}

const FEMALE_NAME_HINTS = [
  "mónica", "monica", "paulina", "helena", "sabina", "female", "mujer",
  "elvira", "conchita", "esperanza", "lupe", "camila", "valeria", "carmen",
  "google español", "microsoft helena", "microsoft sabina", "microsoft raul", // (raul se excluye abajo)
];

function scoreVoice(voice) {
  const lang = (voice.lang || "").toLowerCase();
  const name = (voice.name || "").toLowerCase();
  let score = 0;
  if (lang.startsWith("es")) score += 10;
  if (lang === "es-es" || lang === "es-us" || lang === "es-mx") score += 3;
  if (name.includes("male") || name.includes("hombre") || name.includes("jorge") || name.includes("diego") || name.includes("raul")) {
    score -= 15;
  }
  if (FEMALE_NAME_HINTS.some((hint) => name.includes(hint))) score += 8;
  if (voice.localService) score += 1;
  return score;
}

export async function pickBestSpanishFemaleVoice(preferredVoiceName) {
  const voices = voicesReady ? cachedVoices : await loadVoices();
  if (!voices.length) return null;
  if (preferredVoiceName) {
    const exact = voices.find((v) => v.name === preferredVoiceName);
    if (exact) return exact;
  }
  const spanish = voices.filter((v) => (v.lang || "").toLowerCase().startsWith("es"));
  const pool = spanish.length ? spanish : voices;
  return pool.slice().sort((a, b) => scoreVoice(b) - scoreVoice(a))[0] || null;
}

export async function listSpanishVoices() {
  const voices = voicesReady ? cachedVoices : await loadVoices();
  return voices.filter((v) => (v.lang || "").toLowerCase().startsWith("es"));
}

class VoiceEngine {
  constructor() {
    this.currentAudio = null;
    this.currentUtterance = null;
    this.pendingAudios = new Set();
    this.playToken = 0;
    this.rate = 0.92;
    this.pitch = 1.0;
    this.preferredVoiceName = localStorage.getItem("rosario_voice_name") || null;
  }

  setPreferredVoice(name) {
    this.preferredVoiceName = name;
    try {
      localStorage.setItem("rosario_voice_name", name || "");
    } catch (e) {
      /* almacenamiento no disponible, seguimos sin recordar preferencia */
    }
  }

  setRate(rate) {
    this.rate = rate;
  }

  // Invalida cualquier reproducción en curso o en camino (evita que un audio
  // que todavía estaba cargando cuando se pidió detener, termine sonando solo).
  stop() {
    this.playToken += 1;
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
    for (const audio of this.pendingAudios) {
      try {
        audio.pause();
      } catch (e) {
        /* el audio ya pudo haber sido descartado */
      }
    }
    this.pendingAudios.clear();
    if (speechSynthesis.speaking || speechSynthesis.pending) {
      speechSynthesis.cancel();
    }
    this.currentUtterance = null;
  }

  /**
   * Reproduce un texto. Si se pasa audioSrc, intenta reproducir ese archivo
   * pregrabado primero; si no existe (404) cae a voz del teléfono.
   * onEnd se llama cuando termina de sonar (por audio o por síntesis).
   */
  async speak(text, { audioSrc = null, onEnd = null, onStart = null } = {}) {
    this.stop();
    const token = this.playToken;

    if (audioSrc) {
      const playedViaAudio = await this._tryPlayAudio(audioSrc, onStart, onEnd, token);
      if (playedViaAudio) return;
    }
    if (token !== this.playToken) return; // esta reproducción quedó obsoleta mientras cargaba
    this._speakWithDevice(text, onStart, onEnd, token);
  }

  _tryPlayAudio(src, onStart, onEnd, token) {
    return new Promise((resolve) => {
      const audio = new Audio(src);
      this.pendingAudios.add(audio);
      let started = false;

      const forget = () => this.pendingAudios.delete(audio);

      audio.addEventListener("canplay", () => {
        forget();
        if (token !== this.playToken) {
          resolve(false);
          return;
        }
        started = true;
        this.currentAudio = audio;
        if (onStart) onStart();
        audio.play().catch(() => resolve(false));
        resolve(true);
      });
      audio.addEventListener("error", () => {
        forget();
        if (!started) resolve(false);
      });
      audio.addEventListener("ended", () => {
        forget();
        if (token !== this.playToken) return;
        this.currentAudio = null;
        if (onEnd) onEnd();
      });
      audio.load();
      // Si en 2.5s no pudo cargar, asumimos que no existe el archivo.
      setTimeout(() => {
        if (!started) {
          forget();
          resolve(false);
        }
      }, 2500);
    });
  }

  async _speakWithDevice(text, onStart, onEnd, token) {
    if (!("speechSynthesis" in window)) {
      if (onEnd) onEnd();
      return;
    }
    const voice = await pickBestSpanishFemaleVoice(this.preferredVoiceName);
    if (token !== this.playToken) return; // se pidió detener mientras se elegía la voz
    const utterance = new SpeechSynthesisUtterance(text);
    if (voice) utterance.voice = voice;
    utterance.lang = voice ? voice.lang : "es-ES";
    utterance.rate = this.rate;
    utterance.pitch = this.pitch;
    utterance.onstart = () => {
      if (token === this.playToken && onStart) onStart();
    };
    utterance.onend = () => {
      if (token === this.playToken && onEnd) onEnd();
    };
    utterance.onerror = () => {
      if (token === this.playToken && onEnd) onEnd();
    };
    this.currentUtterance = utterance;
    speechSynthesis.speak(utterance);
  }
}

export const voiceEngine = new VoiceEngine();
loadVoices();
