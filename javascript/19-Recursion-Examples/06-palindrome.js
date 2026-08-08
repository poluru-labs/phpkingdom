function isPalindrome(s, left = 0, right = s.length - 1) {
  if (left >= right) return true;
  if (s[left] !== s[right]) return false;
  return isPalindrome(s, left + 1, right - 1);
}
const words = ["level", "hello", "racecar"];
document.getElementById("out").textContent = words
  .map((w) => w + " → " + isPalindrome(w))
  .join("\n");
