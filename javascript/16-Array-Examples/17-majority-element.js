function majority(nums) {
  let candidate = null, count = 0;
  for (const n of nums) {
    if (count === 0) candidate = n;
    count += n === candidate ? 1 : -1;
  }
  return candidate;
}
document.getElementById("out").textContent = String(majority([2,2,1,1,1,2,2]));
