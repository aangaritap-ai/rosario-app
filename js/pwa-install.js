export function setupInstallPrompt() {
  let deferredEvent = null;
  const banner = document.getElementById("install-banner");
  const btnInstall = document.getElementById("btn-install");
  const btnDismiss = document.getElementById("btn-dismiss-install");
  if (!banner) return;

  const dismissedKey = "rosario_install_dismissed";
  const alreadyDismissed = localStorage.getItem(dismissedKey) === "1";
  const isStandalone =
    window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;

  const isIOS = /iphone|ipad|ipod/i.test(window.navigator.userAgent);

  if (isStandalone || alreadyDismissed) {
    banner.hidden = true;
  } else if (isIOS) {
    banner.hidden = false;
    banner.querySelector(".install-text").textContent =
      "Para instalar: toca Compartir (⬆) y luego «Agregar a pantalla de inicio».";
    btnInstall.hidden = true;
  } else {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      deferredEvent = event;
      banner.hidden = false;
    });
  }

  if (btnInstall) {
    btnInstall.addEventListener("click", async () => {
      if (!deferredEvent) return;
      deferredEvent.prompt();
      await deferredEvent.userChoice;
      deferredEvent = null;
      banner.hidden = true;
    });
  }
  if (btnDismiss) {
    btnDismiss.addEventListener("click", () => {
      banner.hidden = true;
      try {
        localStorage.setItem(dismissedKey, "1");
      } catch (e) {
        /* sin almacenamiento disponible, simplemente ocultamos por esta sesión */
      }
    });
  }
}
