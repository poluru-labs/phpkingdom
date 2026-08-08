function maxSlidingWindow(arr, k) {
  const deque = [], out = [];
  for (let i = 0; i < arr.length; i++) {
    while (deque.length && deque[0] <= i - k) deque.shift();
    while (deque.length && arr[deque[deque.length - 1]] <= arr[i]) deque.pop();
    deque.push(i);
    if (i >= k - 1) out.push(arr[deque[0]]);
  }
  return out;
}
const arr = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
document.getElementById("out").textContent =
  "array: " + JSON.stringify(arr) + "\n" +
  "k: " + k + "\n" +
  "window maxes: " + JSON.stringify(maxSlidingWindow(arr, k));
