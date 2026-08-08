function findDuplicates(arr) {
  const freq = {};
  for (const n of arr) freq[n] = (freq[n] || 0) + 1;
  return Object.keys(freq).filter((k) => freq[k] > 1).map(Number);
}
document.getElementById("out").textContent = findDuplicates([4,3,2,7,8,2,3,1]).join(", ");
