const text = "cat catalog scatter";
const wholeCat = text.match(/\bcat\b/g);
const anyCat = text.match(/cat/g);
document.getElementById("out").textContent =
  "whole word \\bcat\\b: " + JSON.stringify(wholeCat) + "\n" +
  "any 'cat':            " + JSON.stringify(anyCat);
