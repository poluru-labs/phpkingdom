const arr = ["A", "B", "C", "D"];
const pairs = [];
for (let i = 0; i < arr.length; i++)
  for (let j = i + 1; j < arr.length; j++)
    pairs.push(arr[i] + arr[j]);
document.getElementById("out").textContent = pairs.join(", ");
