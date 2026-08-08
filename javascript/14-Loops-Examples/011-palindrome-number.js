function isPalindrome(n) {
  const s = String(n);
  let i = 0, j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) return false;
    i++; j--;
  }
  return true;
}
document.getElementById("out").textContent =
  "121 → " + isPalindrome(121) + "\n123 → " + isPalindrome(123);
