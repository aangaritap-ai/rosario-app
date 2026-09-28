import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadEnv } from "./env.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const env = loadEnv();
const apiKey = env.ELEVENLABS_API_KEY;

const SAMPLE_TEXT =
  "Dios te salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres.";

const CANDIDATES = [
  { label: "serena", voiceId: "qqTINV9edzRuH2zqZGSV", name: "Serena (peninsular, meditación)" },
  { label: "jhenny3", voiceId: "D9MdulIxfrCUUJcGNQon", name: "Jhenny 3 (latinoamericana, meditación)" },
  { label: "elena", voiceId: "aWLmgH56AhypxgJAYlFT", name: "Elena (latinoamericana, cálida)" },
];

const outDir = path.join(__dirname, "..", "audio-samples");
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
