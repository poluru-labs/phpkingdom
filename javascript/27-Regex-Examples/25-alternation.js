const words = ["cat", "dog", "bird", "fish"];
const re = /cat|dog|fish/;
const hits = words.filter(w => re.test(w));
document.getElementById("out").textContent =
  "pattern: /cat|dog|fish/\n" +
  "matches: " + JSON.stringify(hits);
