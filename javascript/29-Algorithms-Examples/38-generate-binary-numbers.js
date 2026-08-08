function binaryNumbers(n) {
  const q = ["1"], out = [];
  while (out.length < n) {
    const cur = q.shift();
    out.push(cur);
    q.push(cur + "0");
    q.push(cur + "1");
  }
  return out;
}
const n = 8;
document.getElementById("out").textContent =
  "n: " + n + "\n" +
  "binary 1..n: " + JSON.stringify(binaryNumbers(n));
