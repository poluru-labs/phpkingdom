const s = "line1\nline2";
document.getElementById("out").textContent =
  String(/line1.line2/.test(s)) + " vs " + String(/line1.line2/s.test(s));
