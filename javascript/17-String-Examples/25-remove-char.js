function removeChar(s, ch) {
  return s.split(ch).join("");
}
document.getElementById("out").textContent = removeChar("phpkingdom", "p");
