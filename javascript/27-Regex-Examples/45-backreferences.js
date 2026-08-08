const text = "the the quick brown brown fox";
const dupes = text.match(/\b(\w+)\s+\1\b/g);
document.getElementById("out").textContent =
  "text: " + text + "\n" +
  "duplicates: " + JSON.stringify(dupes);
