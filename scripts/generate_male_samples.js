import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadEnv } from "./env.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const env = loadEnv();
const apiKey = env.ELEVENLABS_API_KEY;

const SAMPLE_TEXT =
  "Padre nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino.";

const CANDIDATES = [
  { label: "nelson", voiceId: "nGWdleEWLghpMtgoCWhM", name: "Nelson Angarita Parra (personalizada)" },
  { label: "oscar", voiceId: "3mmJ2Z5SLZ9OkeZZcv5p", name: "Oscar (narrador, latinoamericano)" },
  { label: "rogher", voiceId: "0ji4DHZV895MuXeZB0PL", name: "Rogher Osorio (locutor colombiano)" },
];

const outDir = path.join(__dirname, "..", "audio-samples-male");
fs.mkdirSync(outDir, { recursive: true });

for (const c of CANDIDATES) {
  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${c.voiceId}`, {
    method: "POST",
    headers: {
      "xi-api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: SAMPLE_TEXT,
      model_id: "eleven_flash_v2_5",
      voice_settings: { stability: 0.55, similarity_boost: 0.8 },
    }),
  });
  if (!res.ok) {
    console.error(`FAIL ${c.label}:`, res.status, await res.text());
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  const dest = path.join(outDir, `${c.label}.mp3`);
  fs.writeFileSync(dest, buf);
  console.log(`OK ${c.label} (${c.name}): ${buf.length} bytes -> ${dest}`);
}
