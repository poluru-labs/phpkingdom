function wave(arr) {
  const a = [...arr].sort((x, y) => x - y);
  for (let i = 0; i < a.length - 1; i += 2) [a[i], a[i + 1]] = [a[i + 1], a[i]];
  return a;
}
document.getElementById("out").textContent = wave([10,5,6,3,2,20,100,80]).join(", ");
