const arr = [64, 25, 12, 22, 11];
for (let i = 0; i < arr.length - 1; i++) {
  let minIdx = i;
  for (let j = i + 1; j < arr.length; j++) if (arr[j] < arr[minIdx]) minIdx = j;
  if (minIdx !== i) { const t = arr[i]; arr[i] = arr[minIdx]; arr[minIdx] = t; }
}
document.getElementById("out").textContent = arr.join(", ");
