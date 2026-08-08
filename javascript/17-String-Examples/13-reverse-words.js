function reverseWords(s) {
  return s.trim().split(/\s+/).reverse().join(" ");
}
document.getElementById("out").textContent = reverseWords("learn javascript every day");
