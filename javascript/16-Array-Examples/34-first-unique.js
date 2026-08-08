function firstUnique(arr) {
  const freq = {};
  for (const n of arr) freq[n] = (freq[n] || 0) + 1;
  return arr.find((n) => freq[n] === 1);
}
document.getElementById("out").textContent = String(firstUnique([4,5,1,2,0,4]));
