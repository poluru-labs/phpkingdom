function escapeRegex(str) {
  return str.replace(/[.*+?^$\{}()|[\]\\]/g, "\\$&");
}
const userInput = "price ($)";
const safe = new RegExp(escapeRegex(userInput), "i");
const text = "The price ($) is shown below.";
document.getElementById("out").textContent =
  "user input: " + userInput + "\n" +
  "escaped:    " + escapeRegex(userInput) + "\n" +
  "match:      " + safe.test(text);
