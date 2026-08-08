function deepMerge(target, source) {
  const out = { ...target };
  for (const [k, v] of Object.entries(source)) {
    if (v && typeof v === "object" && !Array.isArray(v)) out[k] = deepMerge(out[k] || {}, v);
    else out[k] = v;
  }
  return out;
}
const a = { theme: { mode: "light", font: 16 }, ok: true };
const b = { theme: { mode: "dark" }, lang: "en" };
document.getElementById("out").textContent = JSON.stringify(deepMerge(a, b), null, 2);
