const text = "first line\nsecond line\nthird";
const withoutM = text.match(/^\w+/);
const withM = text.match(/^\w+/gm);
document.getElementById("out").textContent =
  "without m: " + JSON.stringify(withoutM) + "\n" +
  "with m:    " + JSON.stringify(withM);
