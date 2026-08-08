function moveZeros(arr) {
  let write = 0;
  for (let read = 0; read < arr.length; read++) {
    if (arr[read] !== 0) arr[write++] = arr[read];
  }
  while (write < arr.length) arr[write++] = 0;
  return arr;
}
const input = [0, 1, 0, 3, 12];
document.getElementById("out").textContent =
  "input:  " + JSON.stringify(input) + "\noutput: " + JSON.stringify(moveZeros(input.slice()));
