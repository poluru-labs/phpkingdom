function pairsWithSum(arr, target) {
  const seen = new Set();
  const pairs = [];
  const used = new Set();
  for (const n of arr) {
    const need = target - n;
    if (seen.has(need)) {
      const key = [Math.min(n, need), Math.max(n, need)].join(",");
      if (!used.has(key)) { used.add(key); pairs.push([Number(key.split(",")[0]), Number(key.split(",")[1])]); }
    }
    seen.add(n);
  }
  return pairs;
}
document.getElementById("out").textContent = JSON.stringify(pairsWithSum([1,2,3,4,5,6], 7));
