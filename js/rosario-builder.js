import { ORACIONES, MISTERIOS, LETANIAS_INVOCACIONES } from "../data/rosario.js";

const AUDIO_BASE = "audio/rosario/";
const MISTERIOS_AUDIO_BASE = "audio/rosario/misterios/";

function oracionStep(id, tituloExtra) {
  const o = ORACIONES[id];
  return {
    id,
    titulo: tituloExtra || o.titulo,
    texto: o.texto,
    audioSrc: o.audio ? `${AUDIO_BASE}${id}.mp3` : null,
  };
}

export function buildRosarioSteps(mysteryKey, { incluirLetanias = false } = {}) {
  const set = MISTERIOS[mysteryKey];
  const steps = [];

  steps.push(oracionStep("senal_cruz", "Señal de la Cruz"));
  steps.push(oracionStep("credo"));
  steps.push(oracionStep("padre_nuestro", "Padre Nuestro (por la Iglesia)"));

  const intenciones = ["por la Fe", "por la Esperanza", "por la Caridad"];
  intenciones.forEach((intencion, i) => {
    steps.push(oracionStep("ave_maria", `Ave María — ${intencion} (${i + 1} de 3)`));
  });
  steps.push(oracionStep("gloria"));

  set.lista.forEach((misterio, mi) => {
    steps.push({
      id: `misterio-${mi}`,
      titulo: `${set.nombre} · ${misterio.titulo}`,
      texto: misterio.texto,
      audioSrc: `${MISTERIOS_AUDIO_BASE}${mysteryKey}-${mi + 1}.mp3`,
    });
    steps.push(oracionStep("padre_nuestro"));
    for (let i = 1; i <= 10; i++) {
      steps.push(oracionStep("ave_maria", `Ave María (${i} de 10)`));
    }
    steps.push(oracionStep("gloria"));
    steps.push(oracionStep("fatima"));
  });

  if (incluirLetanias) {
    steps.push(oracionStep("letania_intro", "Letanías (introducción)"));
    LETANIAS_INVOCACIONES.forEach((inv, i) => {
      steps.push({
        id: `letania-${i}`,
        titulo: "Letanías",
        texto: `${inv}, ruega por nosotros.`,
        audioSrc: null,
      });
    });
  }

  steps.push(oracionStep("salve"));
  steps.push(oracionStep("final", "Oración final"));
  steps.push(oracionStep("senal_cruz", "Señal de la Cruz (final)"));

  return steps;
}

export function todayWeekdayKey() {
  const dias = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
  return dias[new Date().getDay()];
}
