function containsDuplicate(nums) {
  return new Set(nums).size !== nums.length;
}
document.getElementById("out").textContent =
  containsDuplicate([1,2,3,1]) + " / " + containsDuplicate([1,2,3,4]);
