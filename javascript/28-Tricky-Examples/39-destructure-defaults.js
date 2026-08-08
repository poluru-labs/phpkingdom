const { a = 1 } = { a: undefined };
const { b = 2 } = { b: null };
document.getElementById("out").textContent =
  "a=" + a + " (default used)\n" +
  "b=" + b + " (null kept)";
