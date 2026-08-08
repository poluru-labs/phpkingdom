function longestPalindrome(s) {
  let best = "";
  function expand(l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) { l--; r++; }
    return s.slice(l + 1, r);
  }
  for (let i = 0; i < s.length; i++) {
    const odd = expand(i, i);
    const even = expand(i, i + 1);
    const cur = odd.length > even.length ? odd : even;
    if (cur.length > best.length) best = cur;
  }
  return best;
}
document.getElementById("out").textContent = longestPalindrome("babad");
