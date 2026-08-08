let s = "cat";
s[0] = "b";
document.getElementById("out").textContent =
  "after s[0]=\"b\" => " + s + "\n" +
  "correct => " + ("b" + s.slice(1));
