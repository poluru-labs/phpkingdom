function longestWord(sentence) {
  return sentence.split(/\s+/).reduce((best, w) => w.length > best.length ? w : best, "");
}
document.getElementById("out").textContent = longestWord("I love javascript tutorials");
