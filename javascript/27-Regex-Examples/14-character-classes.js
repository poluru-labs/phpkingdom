const text = "Room 42: user_name logged in";
const digits = text.match(/\d+/g);
const words = text.match(/\w+/g);
const spaces = text.match(/\s/g);
document.getElementById("out").textContent =
  "\\d+: " + JSON.stringify(digits) + "\n" +
  "\\w+: " + JSON.stringify(words) + "\n" +
  "\\s count: " + (spaces && spaces.length);
