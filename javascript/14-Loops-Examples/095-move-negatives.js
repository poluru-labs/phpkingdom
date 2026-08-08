const arr = [1, -2, 3, -4, 5, -6];
let left = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    const t = arr[left]; arr[left] = arr[i]; arr[i] = t;
    left++;
  }
}
document.getElementById("out").textContent = arr.join(", ");
