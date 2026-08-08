function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}
document.getElementById("out").textContent = JSON.stringify(chunk([1,2,3,4,5], 2));
