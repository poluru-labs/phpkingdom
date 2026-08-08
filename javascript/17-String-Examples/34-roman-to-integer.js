function romanToInt(s) {
  const val = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const cur = val[s[i]], next = val[s[i + 1]] || 0;
    total += cur < next ? -cur : cur;
  }
  return total;
}
document.getElementById("out").textContent = String(romanToInt("MCMXCIV"));
