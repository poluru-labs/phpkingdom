document.getElementById("out").textContent =
  "0.1 + 0.2 => " + (0.1 + 0.2) + "\n" +
  "fixed => " + (0.1 + 0.2).toFixed(1) + "\n" +
  "eps check => " + (Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON);
