const CACHE_VERSION = "rosario-v3";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./css/styles.css",
  "./js/app.js",
  "./js/voice-engine.js",
  "./js/pray-player.js",
  "./js/rosario-builder.js",
  "./js/novena-builder.js",
  "./js/pwa-install.js",
  "./data/rosario.js",
  "./data/novenas.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-512-maskable.png",
  "./icons/apple-touch-icon.png",
  "./images/virgen-hero.svg",
  "./images/novena-navidad.jpg",
  "./images/novena-divina-misericordia.jpg",
  "./images/novena-sagrado-corazon.jpg",
  "./images/novena-guadalupe.jpg",
  "./images/novena-carmen.jpg",
  "./images/novena-san-judas-tadeo.jpg",
  "./images/novena-espiritu-santo.jpg",
  "./images/novena-san-antonio.jpg",
  "./images/novena-santa-rita.jpg",
  "./images/novena-animas-purgatorio.jpg",
  "./audio/rosario/senal_cruz.mp3",
  "./audio/rosario/credo.mp3",
  "./audio/rosario/padre_nuestro.mp3",
  "./audio/rosario/ave_maria.mp3",
  "./audio/rosario/gloria.mp3",
  "./audio/rosario/fatima.mp3",
  "./audio/rosario/salve.mp3",
  "./audio/rosario/final.mp3",
  "./audio/rosario/misterios/gozosos-1.mp3",
  "./audio/rosario/misterios/gozosos-2.mp3",
  "./audio/rosario/misterios/gozosos-3.mp3",
  "./audio/rosario/misterios/gozosos-4.mp3",
  "./audio/rosario/misterios/gozosos-5.mp3",
  "./audio/rosario/misterios/dolorosos-1.mp3",
  "./audio/rosario/misterios/dolorosos-2.mp3",
  "./audio/rosario/misterios/dolorosos-3.mp3",
  "./audio/rosario/misterios/dolorosos-4.mp3",
  "./audio/rosario/misterios/dolorosos-5.mp3",
  "./audio/rosario/misterios/gloriosos-1.mp3",
  "./audio/rosario/misterios/gloriosos-2.mp3",
  "./audio/rosario/misterios/gloriosos-3.mp3",
  "./audio/rosario/misterios/gloriosos-4.mp3",
  "./audio/rosario/misterios/gloriosos-5.mp3",
  "./audio/rosario/misterios/luminosos-1.mp3",
  "./audio/rosario/misterios/luminosos-2.mp3",
  "./audio/rosario/misterios/luminosos-3.mp3",
  "./audio/rosario/misterios/luminosos-4.mp3",
  "./audio/rosario/misterios/luminosos-5.mp3",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request)
        .then((response) => {
          if (response && response.ok && new URL(request.url).origin === location.origin) {
            const copy = response.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached);
    })
  );
});
