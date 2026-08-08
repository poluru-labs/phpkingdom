const text = "John Doe <john@example.com>";
const re = /(\w+) (\w+) <([^>]+)>/;
const m = re.exec(text);
document.getElementById("out").textContent =
  "full:  " + m[0] + "\n" +
  "first: " + m[1] + "\n" +
  "last:  " + m[2] + "\n" +
  "email: " + m[3];
