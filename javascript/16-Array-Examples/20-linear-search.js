function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) if (arr[i] === target) return i;
  return -1;
}
document.getElementById("out").textContent = String(linearSearch(["html","css","js"], "css"));
