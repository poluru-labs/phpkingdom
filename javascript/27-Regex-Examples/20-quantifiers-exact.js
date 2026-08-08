const text = "zip zipcode zippp";
const three = text.match(/\w{3}/g);
const threeToFive = text.match(/\w{3,5}/g);
const exactlyFour = text.match(/\w{4}/g);
document.getElementById("out").textContent =
  "\\w{3}:    " + JSON.stringify(three) + "\n" +
  "\\w{3,5}:  " + JSON.stringify(threeToFive) + "\n" +
  "\\w{4}:    " + JSON.stringify(exactlyFour);
