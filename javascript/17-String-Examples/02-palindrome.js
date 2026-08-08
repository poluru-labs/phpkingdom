function isPalindrome(s) {
  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  return clean === clean.split("").reverse().join("");
}
document.getElementById("out").textContent =
  isPalindrome("A man a plan a canal Panama") + " / " + isPalindrome("hello");
