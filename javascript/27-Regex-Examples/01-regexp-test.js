const text = "Hello, JavaScript regex!";
const re = /script/i;
const found = re.test(text);
document.getElementById("out").textContent =
  "pattern: /script/i\n" +
  "text: " + text + "\n" +
  "test() => " + found;
