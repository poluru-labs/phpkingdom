function maxArea(heights) {
  let lo = 0, hi = heights.length - 1, best = 0;
  while (lo < hi) {
    const h = Math.min(heights[lo], heights[hi]);
    best = Math.max(best, h * (hi - lo));
    if (heights[lo] < heights[hi]) lo++;
    else hi--;
  }
  return best;
}
const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
document.getElementById("out").textContent =
  "heights: " + JSON.stringify(heights) + "\n" +
  "max area: " + maxArea(heights);
