function flattenObject(obj, prefix = "", out = {}) {
  for (const [k, v] of Object.entries(obj)) {
    const path = prefix ? prefix + "." + k : k;
    if (v && typeof v === "object" && !Array.isArray(v)) flattenObject(v, path, out);
    else out[path] = v;
  }
  return out;
}
document.getElementById("out").textContent = JSON.stringify(flattenObject({ a: 1, b: { c: 2, d: { e: 3 } } }));
