import { loadEnv } from "./env.js";

const env = loadEnv();
const apiKey = env.ELEVENLABS_API_KEY;
if (!apiKey) {
  console.error("Falta ELEVENLABS_API_KEY en .env");
  process.exit(1);
}

const res = await fetch("https://api.elevenlabs.io/v1/voices", {
  headers: { "xi-api-key": apiKey },
});
if (!res.ok) {
  console.error("Error al listar voces:", res.status, await res.text());
  process.exit(1);
}
const data = await res.json();
const voices = data.voices || [];
console.log(`Total de voces disponibles: ${voices.length}\n`);
for (const v of voices) {
  const labels = v.labels || {};
  console.log(
    `- ${v.name} | id=${v.voice_id} | gender=${labels.gender || "?"} | accent=${labels.accent || "?"} | descr=${labels.description || ""} | use_case=${labels.use_case || ""}`
  );
}
