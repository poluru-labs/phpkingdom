function hamming(a, b) {
  if (a.length !== b.length) return -1;
  let d = 0;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) d++;
  return d;
}
document.getElementById("out").textContent = String(hamming("karolin", "kathrin"));
