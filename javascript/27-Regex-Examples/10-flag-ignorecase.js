const text = "JavaScript REGEX rocks";
const caseSensitive = /regex/.test(text);
const ignoreCase = /regex/i.test(text);
document.getElementById("out").textContent =
  "/regex/.test  => " + caseSensitive + "\n" +
  "/regex/i.test => " + ignoreCase;
