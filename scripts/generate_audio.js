import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadEnv } from "./env.js";
import { ORACIONES, MISTERIOS } from "../data/rosario.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const env = loadEnv();
const apiKey = env.ELEVENLABS_API_KEY;
if (!apiKey) {
  console.error("Falta ELEVENLABS_API_KEY en .env");
  process.exit(1);
}

const VOICES = {
  female: "D9MdulIxfrCUUJcGNQon", // Jhenny 3 - Meditation & Affirmations (latinoamericana)
  male: "nGWdleEWLghpMtgoCWhM", // Nelson Angarita Parra
};
const MODEL_ID = "eleven_flash_v2_5"; // modelo más económico de ElevenLabs

// Oraciones que se leen con voz masculina; el resto usa la voz femenina.
const MALE_ORACIONES = new Set(["padre_nuestro", "credo"]);

async function synth(text, voiceId) {
  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
    method: "POST",
    headers: {
      "xi-api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
      model_id: MODEL_ID,
      voice_settings: { stability: 0.55, similarity_boost: 0.8 },
    }),
  });
  if (!res.ok) {
    throw new Error(`${res.status} ${await res.text()}`);
  }
  return Buffer.from(await res.arrayBuffer());
}

let totalChars = 0;

// 1) Oraciones fijas del Rosario
const oracionesDir = path.join(__dirname, "..", "audio", "rosario");
fs.mkdirSync(oracionesDir, { recursive: true });
const oraciones = Object.values(ORACIONES).filter((o) => o.audio);
console.log(`\n== Oraciones fijas (${oraciones.length}) ==`);
for (const o of oraciones) {
  const voice = MALE_ORACIONES.has(o.id) ? VOICES.male : VOICES.female;
  totalChars += o.texto.length;
  try {
    const buf = await synth(o.texto, voice);
    fs.writeFileSync(path.join(oracionesDir, `${o.id}.mp3`), buf);
    console.log(`OK ${o.id} (${MALE_ORACIONES.has(o.id) ? "Nelson" : "Jhenny3"}): ${buf.length} bytes`);
  } catch (e) {
    console.error(`FAIL ${o.id}:`, e.message);
  }
  await new Promise((r) => setTimeout(r, 400));
}

// 2) Meditaciones de los 20 misterios (siempre voz femenina)
const misteriosDir = path.join(__dirname, "..", "audio", "rosario", "misterios");
fs.mkdirSync(misteriosDir, { recursive: true });
console.log(`\n== Misterios ==`);
for (const [key, set] of Object.entries(MISTERIOS)) {
  for (let i = 0; i < set.lista.length; i++) {
    const misterio = set.lista[i];
    const filename = `${key}-${i + 1}.mp3`;
    totalChars += misterio.texto.length;
    try {
      const buf = await synth(misterio.texto, VOICES.female);
      fs.writeFileSync(path.join(misteriosDir, filename), buf);
      console.log(`OK ${filename}: ${buf.length} bytes`);
    } catch (e) {
      console.error(`FAIL ${filename}:`, e.message);
    }
    await new Promise((r) => setTimeout(r, 400));
  }
}

console.log(`\nTotal de caracteres enviados a la API en esta corrida: ${totalChars}`);
