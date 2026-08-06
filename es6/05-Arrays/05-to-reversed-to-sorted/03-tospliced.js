const a = [1, 2, 3, 4];
document.getElementById("out").textContent =
  JSON.stringify(a.toSpliced(1, 2, 9, 8));
