const arr = [2, 2, 1, 2, 3, 2, 2];
let majority = null;
for (let i = 0; i < arr.length; i++) {
  let count = 0;
  for (let j = 0; j < arr.length; j++) if (arr[j] === arr[i]) count++;
  if (count > arr.length / 2) { majority = arr[i]; break; }
}
document.getElementById("out").textContent = "majority = " + majority;
