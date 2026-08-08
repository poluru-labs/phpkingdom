const re = /a/g;
const text = "aba";
const results = [
  "test #1: " + re.test(text) + " lastIndex=" + re.lastIndex,
  "test #2: " + re.test(text) + " lastIndex=" + re.lastIndex,
  "test #3: " + re.test(text) + " lastIndex=" + re.lastIndex,
  "fix: reset lastIndex to 0 before each test"
];
re.lastIndex = 0;
results.push("reset test: " + re.test(text));
document.getElementById("out").textContent = results.join("\n");
