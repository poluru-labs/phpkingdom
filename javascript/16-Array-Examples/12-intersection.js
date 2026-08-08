function intersection(a, b) {
  const setB = new Set(b);
  return [...new Set(a)].filter((x) => setB.has(x));
}
document.getElementById("out").textContent = intersection([1,2,2,3], [2,3,4]).join(", ");
