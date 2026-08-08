function nextGreater(arr) {
  const result = new Array(arr.length).fill(-1);
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
      result[stack.pop()] = arr[i];
    }
    stack.push(i);
  }
  return result;
}
const arr = [2, 1, 2, 4, 3];
document.getElementById("out").textContent =
  "array:  " + JSON.stringify(arr) + "\n" +
  "next greater: " + JSON.stringify(nextGreater(arr));
