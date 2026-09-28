# Rosario y Novenas

App web (PWA) para rezar el Santo Rosario con voz guiada y seguir 10 novenas
tradicionales, incluyendo la Novena de Navidad. Se instala como "acceso
directo" en el celular (Android/iOS) desde el propio navegador, sin pasar
por la Play Store.

## Cómo probarla en tu computador

Necesitas Python o Node instalados (cualquiera de los dos sirve solo para
levantar un servidor local; no hace falta para el celular).

```bash
cd rosario-app
python -m http.server 8842
```

Abre `http://localhost:8842` en el navegador.

## Cómo instalarla en el celular

1. Publica la carpeta en un hosting con HTTPS (ver sección "Publicar en
   GitHub Pages" más abajo). Un PWA no se puede instalar desde `file://`
   ni, en Android, desde una IP local sin HTTPS.
2. Abre el enlace en Chrome (Android) o Safari (iPhone).
3. Android/Chrome: aparecerá un aviso "Instalar" (o Menú ⋮ → "Instalar
   aplicación" / "Agregar a pantalla de inicio").
4. iPhone/Safari: toca el ícono de Compartir (⬆) → "Agregar a pantalla de
   inicio".

## Voz de las oraciones

- **Rosario (oraciones fijas: Padre Nuestro, Ave María, Gloria, Credo,
  Salve, Señal de la Cruz, Oración de Fátima, Oración final):** audio
  pregrabado con IA (ElevenLabs, voz "Jhenny 3"), guardado en
  `audio/rosario/*.mp3`. Se generó una sola vez con `scripts/generate_audio.js`.
- **Novenas y meditaciones de los misterios:** voz del teléfono (Web Speech
  API), gratis y sin límite. La app elige automáticamente la mejor voz
  femenina en español disponible; se puede cambiar en Ajustes ⚙.

### Regenerar o añadir audio con IA

Si algún día cambias los textos del Rosario o quieres generar también
audio de las novenas:

1. Crea un archivo `.env` en la raíz del proyecto con:
   ```
   ELEVENLABS_API_KEY=tu_clave_aqui
   ```
   (este archivo está en `.gitignore`, nunca se sube a GitHub).
2. Ejecuta:
   ```bash
   node scripts/generate_audio.js
   ```
   Este script solo genera las 8 oraciones fijas del Rosario (reutilizadas
   en cada decena), usando el modelo más económico de ElevenLabs
   (`eleven_flash_v2_5`), para gastar el mínimo posible de la cuenta.
3. `scripts/list_voices.js` lista todas las voces disponibles en la cuenta,
   y `scripts/generate_samples.js` genera muestras cortas para comparar
   voces antes de generar el audio final.

## Imágenes

Las 11 imágenes de `images/` son pinturas clásicas de dominio público
(más de 150 años, sin derechos de autor), descargadas de Wikimedia
Commons: la Madonna del Rosario de Caravaggio, la Adoración de los
pastores de Murillo, el Sagrado Corazón de Pompeo Batoni, la Virgen de
Guadalupe, la Virgen del Carmen, San Judas Tadeo (Van Dyck), el Descenso
del Espíritu Santo (Tiziano), San Antonio de Padua (Murillo), Santa Rita
de Casia, las Ánimas del Purgatorio (Alonso Cano) y la Divina Misericordia
(Kazimirowski, 1934).

## Publicar en GitHub Pages

Este proyecto no tiene todavía un repositorio de GitHub. Pasos sugeridos:

1. Crea un repositorio nuevo en github.com (puede ser público o privado;
   GitHub Pages funciona con ambos).
2. Copia la URL del repositorio (ej. `https://github.com/tu-usuario/rosario-app.git`).
3. Desde esta carpeta:
   ```bash
   git init
   git add .
   git commit -m "Primera versión de la app del Rosario y Novenas"
   git branch -M main
   git remote add origin TU_URL_DEL_REPO
   git push -u origin main
   ```
4. En GitHub: Settings → Pages → Source: "Deploy from a branch" → rama
   `main`, carpeta `/ (root)`.
5. En unos minutos, la app quedará disponible en
   `https://tu-usuario.github.io/rosario-app/`.

## Estructura del proyecto

```
rosario-app/
  index.html          Página principal (SPA)
  manifest.json        Manifiesto PWA (ícono, nombre, colores)
  service-worker.js    Caché offline
  css/styles.css
  js/                  Lógica de la app (router, reproductor, voz)
  data/                Contenido: oraciones, misterios, 10 novenas
  images/               Pinturas (dominio público)
  audio/rosario/        Audio pregrabado de las oraciones fijas
  icons/                Íconos de instalación
  scripts/              Utilidades para generar audio con ElevenLabs
```
