const text = "hello world from JS";
const titled = text.replace(/\b\w+/g, word =>
  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
);
document.getElementById("out").textContent =
  "before: " + text + "\n" +
  "after:  " + titled;
