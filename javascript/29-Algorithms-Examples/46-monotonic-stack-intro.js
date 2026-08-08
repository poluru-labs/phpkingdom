function prevSmaller(arr) {
  const out = new Array(arr.length).fill(-1);
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) stack.pop();
    out[i] = stack.length ? arr[stack[stack.length - 1]] : -1;
    stack.push(i);
  }
  return out;
}
const arr = [3, 1, 4, 2, 5];
document.getElementById("out").textContent =
  "array: " + JSON.stringify(arr) + "\n" +
  "previous smaller: " + JSON.stringify(prevSmaller(arr));
