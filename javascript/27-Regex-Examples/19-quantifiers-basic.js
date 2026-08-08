const text = "color colour colr";
const optionalU = text.match(/colou?r/g);
const oneOrMore = "aaaab".match(/a+/);
const zeroOrMore = "bbb".match(/a*/g);
document.getElementById("out").textContent =
  "colou?r: " + JSON.stringify(optionalU) + "\n" +
  "a+ on aaaab: " + JSON.stringify(oneOrMore) + "\n" +
  "a* on bbb: " + JSON.stringify(zeroOrMore);
