const arr = ["10", "10", "10"];
document.getElementById("out").textContent =
  "bad: [" + arr.map(parseInt).join(", ") + "]\n" +
  "good: [" + arr.map((n) => parseInt(n, 10)).join(", ") + "]";
