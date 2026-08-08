const text = "Order 3 items for $19.99 and 2 for $5.50";
const nums = text.match(/-?\d+(?:\.\d+)?/g);
document.getElementById("out").textContent =
  "text: " + text + "\n" +
  "numbers: " + JSON.stringify(nums);
