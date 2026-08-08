const N = 10;
const seq = [];
let a = 0, b = 1;
for (let i = 0; i < N; i++) {
  seq.push(a);
  const next = a + b;
  a = b;
  b = next;
}
document.getElementById("out").textContent = seq.join(" ");
