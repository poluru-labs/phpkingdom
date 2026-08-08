function minDiffPair(arr) {
  const a = [...arr].sort((x, y) => x - y);
  let best = Infinity, pair = [];
  for (let i = 1; i < a.length; i++) {
    const diff = a[i] - a[i - 1];
    if (diff < best) { best = diff; pair = [a[i - 1], a[i]]; }
  }
  return pair;
}
document.getElementById("out").textContent = "[" + minDiffPair([3,8,12,5,20]) + "]";
