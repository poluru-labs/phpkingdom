function trap(heights) {
  let lo = 0, hi = heights.length - 1;
  let leftMax = 0, rightMax = 0, water = 0;
  while (lo < hi) {
    if (heights[lo] < heights[hi]) {
      leftMax = Math.max(leftMax, heights[lo]);
      water += leftMax - heights[lo];
      lo++;
    } else {
      rightMax = Math.max(rightMax, heights[hi]);
      water += rightMax - heights[hi];
      hi--;
    }
  }
  return water;
}
const heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
document.getElementById("out").textContent =
  "heights: " + JSON.stringify(heights) + "\n" +
  "trapped water units: " + trap(heights);
