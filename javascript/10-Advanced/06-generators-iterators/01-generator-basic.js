function* range(n) {
  for (let i = 0; i < n; i++) yield i;
}
document.getElementById("out").textContent = [...range(4)].join(",");
