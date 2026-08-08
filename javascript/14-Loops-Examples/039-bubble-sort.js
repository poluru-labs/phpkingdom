const arr = [5, 1, 4, 2, 8];
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      const t = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = t;
    }
  }
}
document.getElementById("out").textContent = arr.join(", ");
