function reverseEachWord(s) {
  return s.split(" ").map((w) => w.split("").reverse().join("")).join(" ");
}
document.getElementById("out").textContent = reverseEachWord("hello world");
