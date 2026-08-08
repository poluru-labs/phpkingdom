let found = -1;
for (let i = 0; i < 10; i++) {
  if (i === 4) { found = i; break; }
}
document.getElementById("out").textContent = "found " + found;
