function union(a, b) {
  return [...new Set([...a, ...b])];
}
document.getElementById("out").textContent = union([1,2,3], [3,4,5]).join(", ");
