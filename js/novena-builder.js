import { ORACIONES } from "../data/rosario.js";

// Construye la secuencia de un día de novena: oración inicial, reflexión y
// petición del día, Padre Nuestro / 3 Ave María / Gloria, y oración final.
export function buildNovenaDaySteps(novena, diaIndex) {
  const dia = novena.dias[diaIndex];
  const steps = [];

  steps.push({
    id: "inicio",
    titulo: `${novena.titulo} — Oración inicial`,
    texto: novena.oracionInicial,
    audioSrc: null,
  });

  steps.push({
    id: "dia-reflexion",
    titulo: dia.titulo,
    texto: dia.reflexion,
    audioSrc: null,
  });

  steps.push({
    id: "dia-peticion",
    titulo: "Intención de hoy",
    texto: dia.peticion,
    audioSrc: null,
  });

  steps.push({ id: "padre_nuestro", titulo: ORACIONES.padre_nuestro.titulo, texto: ORACIONES.padre_nuestro.texto, audioSrc: null });
  for (let i = 1; i <= 3; i++) {
    steps.push({ id: `ave-${i}`, titulo: `Ave María (${i} de 3)`, texto: ORACIONES.ave_maria.texto, audioSrc: null });
  }
  steps.push({ id: "gloria", titulo: ORACIONES.gloria.titulo, texto: ORACIONES.gloria.texto, audioSrc: null });

  steps.push({
    id: "final",
    titulo: `${novena.titulo} — Oración final`,
    texto: novena.oracionFinal,
    audioSrc: null,
  });

  return steps;
}
