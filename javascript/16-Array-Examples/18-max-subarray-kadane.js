function maxSubArray(nums) {
  let best = nums[0], cur = nums[0];
  for (let i = 1; i < nums.length; i++) {
    cur = Math.max(nums[i], cur + nums[i]);
    best = Math.max(best, cur);
  }
  return best;
}
document.getElementById("out").textContent = String(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
