const arr = [1, 2, 3, 4, 5];
const K = 3;
const sums = [];
for (let i = 0; i <= arr.length - K; i++) {
  let s = 0;
  for (let j = i; j < i + K; j++) s += arr[j];
  sums.push(s);
}
document.getElementById("out").textContent = "window sums = " + sums.join(", ");
