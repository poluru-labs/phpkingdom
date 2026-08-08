function stringify(value) {
  if (value === null) return "null";
  const t = typeof value;
  if (t === "string") return JSON.stringify(value);
  if (t === "number" || t === "boolean") return String(value);
  if (Array.isArray(value)) return "[" + value.map(stringify).join(",") + "]";
  return "{" + Object.keys(value).map((k) => JSON.stringify(k) + ":" + stringify(value[k])).join(",") + "}";
}
const obj = { name: "Ada", scores: [98, 95], active: true };
document.getElementById("out").textContent = stringify(obj);
