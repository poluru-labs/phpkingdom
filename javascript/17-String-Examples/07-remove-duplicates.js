function removeDuplicateChars(s) {
  return [...new Set(s)].join("");
}
document.getElementById("out").textContent = removeDuplicateChars("programming");
