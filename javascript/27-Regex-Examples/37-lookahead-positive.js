const text = "10px 20em 30px";
const re = /\d+(?=px)/g;
const matches = text.match(re);
document.getElementById("out").textContent =
  "text: " + text + "\n" +
  "/\\d+(?=px)/g => " + JSON.stringify(matches);
