function isAnagram(a, b) {
  const norm = (s) => s.toLowerCase().split("").sort().join("");
  return norm(a) === norm(b);
}
document.getElementById("out").textContent =
  isAnagram("Listen", "Silent") + " / " + isAnagram("hello", "world");
