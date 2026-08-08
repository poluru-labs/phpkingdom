function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;
  const m1 = {}, m2 = {};
  for (let i = 0; i < s.length; i++) {
    const a = s[i], b = t[i];
    if ((m1[a] && m1[a] !== b) || (m2[b] && m2[b] !== a)) return false;
    m1[a] = b; m2[b] = a;
  }
  return true;
}
document.getElementById("out").textContent =
  isIsomorphic("egg", "add") + " / " + isIsomorphic("foo", "bar");
