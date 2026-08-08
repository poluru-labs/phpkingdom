function dailyTemperatures(temps) {
  const ans = new Array(temps.length).fill(0);
  const stack = [];
  for (let i = 0; i < temps.length; i++) {
    while (stack.length && temps[i] > temps[stack[stack.length - 1]]) {
      const j = stack.pop();
      ans[j] = i - j;
    }
    stack.push(i);
  }
  return ans;
}
const temps = [73, 74, 75, 71, 69, 72, 76, 73];
document.getElementById("out").textContent =
  "temps: " + JSON.stringify(temps) + "\n" +
  "days until warmer: " + JSON.stringify(dailyTemperatures(temps));
