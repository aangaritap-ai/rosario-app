import { voiceEngine } from "./voice-engine.js";

// Reproductor genérico de una secuencia de pasos hablados, usado
// tanto por el Rosario como por las novenas.
// steps: [{ id, titulo, texto, audioSrc, imagen }]
export class PrayerPlayer {
  constructor(container, steps, { onFinish = null, autoAdvanceDelay = 650 } = {}) {
    this.container = container;
    this.steps = steps;
    this.index = 0;
    this.playing = false;
    this.onFinish = onFinish;
    this.autoAdvanceDelay = autoAdvanceDelay;
    this._advanceTimer = null;
    this.render();
  }

  get current() {
    return this.steps[this.index];
  }

  render() {
    const step = this.current;
    const total = this.steps.length;
    this.container.innerHTML = `
      <div class="pray-progress">Paso ${this.index + 1} de ${total}</div>
      <div class="pray-card">
        <h2 class="pray-title">${step.titulo}</h2>
        <p class="pray-text">${step.texto}</p>
      </div>
      <div class="pray-controls">
        <button class="btn-icon" id="btn-prev" aria-label="Anterior">⏮</button>
        <button class="btn-play" id="btn-play">${this.playing ? "⏸ Pausar" : "▶ Reproducir"}</button>
        <button class="btn-icon" id="btn-next" aria-label="Siguiente">⏭</button>
      </div>
      <div class="pray-progressbar">
        <div class="pray-progressbar-fill" style="width:${((this.index + 1) / total) * 100}%"></div>
      </div>
    `;
    this.container.querySelector("#btn-prev").addEventListener("click", () => this.prev());
    this.container.querySelector("#btn-next").addEventListener("click", () => this.next());
    this.container.querySelector("#btn-play").addEventListener("click", () => this.togglePlay());
  }

  togglePlay() {
    if (this.playing) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    this.playing = true;
    this._speakCurrent();
    this.render();
  }

  pause() {
    this.playing = false;
    clearTimeout(this._advanceTimer);
    voiceEngine.stop();
    this.render();
  }

  _speakCurrent() {
    const step = this.current;
    voiceEngine.speak(step.texto, {
      audioSrc: step.audioSrc || null,
      onStart: () => {
        this.playing = true;
      },
      onEnd: () => {
        if (!this.playing) return;
        this._advanceTimer = setTimeout(() => {
          if (this.playing) this._autoNext();
        }, this.autoAdvanceDelay);
      },
    });
  }

  _autoNext() {
    if (this.index >= this.steps.length - 1) {
      this.playing = false;
      voiceEngine.stop();
      this.render();
      if (this.onFinish) this.onFinish();
      return;
    }
    this.index += 1;
    this.render();
    this._speakCurrent();
  }

  next() {
    voiceEngine.stop();
    clearTimeout(this._advanceTimer);
    if (this.index < this.steps.length - 1) {
      this.index += 1;
    }
    const wasPlaying = this.playing;
    this.render();
    if (wasPlaying) this._speakCurrent();
  }

  prev() {
    voiceEngine.stop();
    clearTimeout(this._advanceTimer);
    if (this.index > 0) {
      this.index -= 1;
    }
    const wasPlaying = this.playing;
    this.render();
    if (wasPlaying) this._speakCurrent();
  }

  destroy() {
    clearTimeout(this._advanceTimer);
    voiceEngine.stop();
  }
}
