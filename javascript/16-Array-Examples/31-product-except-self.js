function productExceptSelf(nums) {
  const n = nums.length;
  const out = Array(n).fill(1);
  let left = 1;
  for (let i = 0; i < n; i++) { out[i] *= left; left *= nums[i]; }
  let right = 1;
  for (let i = n - 1; i >= 0; i--) { out[i] *= right; right *= nums[i]; }
  return out;
}
document.getElementById("out").textContent = productExceptSelf([1,2,3,4]).join(", ");
