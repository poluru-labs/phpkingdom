const out = document.getElementById("out");
function parseConfig(json, fallback) {
  try {
    return JSON.parse(json);
  } catch {
    return fallback;
  }
}
const cfg = parseConfig("{", { theme: "light" });
out.textContent = "theme: " + cfg.theme;
