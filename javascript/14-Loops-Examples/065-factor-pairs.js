const N = 36;
const pairs = [];
for (let i = 1; i * i <= N; i++) {
  if (N % i === 0) pairs.push("(" + i + ", " + (N / i) + ")");
}
document.getElementById("out").textContent = pairs.join(" ");
