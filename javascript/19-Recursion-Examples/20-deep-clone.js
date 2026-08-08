function deepClone(value) {
  if (value === null || typeof value !== "object") return value;
  if (Array.isArray(value)) return value.map(deepClone);
  const copy = {};
  for (const key of Object.keys(value)) copy[key] = deepClone(value[key]);
  return copy;
}
const original = { a: 1, b: { c: [2, 3] } };
const cloned = deepClone(original);
cloned.b.c.push(99);
document.getElementById("out").textContent =
  "original: " + JSON.stringify(original) + "\ncloned:   " + JSON.stringify(cloned);
