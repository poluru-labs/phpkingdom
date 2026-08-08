const text = "aa bb aa cc aa";
const g = /aa/g;
const ng = /aa/;
const gResults = [g.exec(text), g.exec(text), g.exec(text)];
const ngResults = [ng.exec(text), ng.exec(text)];
document.getElementById("out").textContent =
  "with g:  " + JSON.stringify(gResults.map(m => m && m[0])) + "\n" +
  "without: " + JSON.stringify(ngResults.map(m => m && m[0]));
