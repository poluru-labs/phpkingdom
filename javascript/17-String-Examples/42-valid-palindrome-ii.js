function validPalindrome(s) {
  function isPal(l, r) {
    while (l < r) if (s[l++] !== s[r--]) return false;
    return true;
  }
  let l = 0, r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) return isPal(l + 1, r) || isPal(l, r - 1);
    l++; r--;
  }
  return true;
}
document.getElementById("out").textContent =
  validPalindrome("abca") + " / " + validPalindrome("abc");
