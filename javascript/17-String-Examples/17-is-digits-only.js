function isDigitsOnly(s) {
  return /^\d+$/.test(s);
}
document.getElementById("out").textContent =
  isDigitsOnly("12345") + " / " + isDigitsOnly("12a45");
