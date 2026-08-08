let x = (1, 2, 3);
let y = 0;
for (let i = 0, j = 10; i < 3; i++, j--) y = j;
document.getElementById("out").textContent =
  "x=" + x + "\nfinal j-like y after loop setup demo=" + y;
