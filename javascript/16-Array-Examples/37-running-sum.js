function runningSum(nums) {
  const out = [];
  let sum = 0;
  for (const n of nums) {
    sum += n;
    out.push(sum);
  }
  return out;
}
document.getElementById("out").textContent = runningSum([1,2,3,4]).join(", ");
