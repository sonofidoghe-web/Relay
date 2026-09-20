// Shared boot splash. Runs on every page: shows the bouncing logo for ~2.2s,
// then fades it out and reveals the page underneath.
document.documentElement.classList.add("rl-loading");

const overlay = document.createElement("div");
overlay.id = "rl-splash";
overlay.innerHTML = '<div class="rl-splash-mark" aria-hidden="true"></div>';
overlay.setAttribute("role", "status");
overlay.setAttribute("aria-label", "Loading Relay");

document.addEventListener("DOMContentLoaded", () => {
  document.body.prepend(overlay);
});

window.addEventListener("load", () => {
  const MIN_SHOW_MS = 2200;
  setTimeout(() => {
    document.documentElement.classList.remove("rl-loading");
    overlay.classList.add("rl-splash-out");
    setTimeout(() => overlay.remove(), 500);
  }, MIN_SHOW_MS);
});
