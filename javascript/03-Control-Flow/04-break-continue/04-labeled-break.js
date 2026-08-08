let found = false;
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i * j === 2) { found = true; break outer; }
  }
}
document.getElementById("out").textContent = "found=" + found;
