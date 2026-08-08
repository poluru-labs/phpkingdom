function urlify(s) {
  return s.trim().replace(/\s+/g, "%20");
}
document.getElementById("out").textContent = urlify("Mr John Smith");
