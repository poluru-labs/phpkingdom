function areRotations(a, b) {
  return a.length === b.length && (a + a).includes(b);
}
document.getElementById("out").textContent =
  areRotations("ABCD", "CDAB") + " / " + areRotations("ABCD", "ACBD");
