function leaders(arr) {
  const out = [];
  let maxRight = -Infinity;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] >= maxRight) {
      out.push(arr[i]);
      maxRight = arr[i];
    }
  }
  return out.reverse();
}
document.getElementById("out").textContent = leaders([16,17,4,3,5,2]).join(", ");
