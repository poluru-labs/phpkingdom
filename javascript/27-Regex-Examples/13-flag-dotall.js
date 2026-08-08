const text = "start\nend";
const noDotAll = /start.end/.test(text);
const dotAll = /start.end/s.test(text);
document.getElementById("out").textContent =
  "/start.end/  => " + noDotAll + "\n" +
  "/start.end/s => " + dotAll;
