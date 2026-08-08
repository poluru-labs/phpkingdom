const text = "Hello 👋 world 🌍";
const bad = /./g.exec(text[6]);
const good = /./u.exec(text[6]);
document.getElementById("out").textContent =
  "char at index 6: " + text[6] + "\n" +
  "/./ without u: " + (bad && bad[0]) + "\n" +
  "/./u with u:    " + (good && good[0]);
