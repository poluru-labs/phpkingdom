const text = "price: $19.99 USD";
const idx = text.search(/\$\d+(\.\d{2})?/);
document.getElementById("out").textContent =
  "text: " + text + "\n" +
  "search(/\\$\\d+(\\.\\d{2})?/) => " + idx;
