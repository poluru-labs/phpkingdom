function sort012(arr) {
  let lo = 0, mid = 0, hi = arr.length - 1;
  const a = [...arr];
  while (mid <= hi) {
    if (a[mid] === 0) { [a[lo], a[mid]] = [a[mid], a[lo]]; lo++; mid++; }
    else if (a[mid] === 1) mid++;
    else { [a[mid], a[hi]] = [a[hi], a[mid]]; hi--; }
  }
  return a;
}
document.getElementById("out").textContent = sort012([2,0,2,1,1,0]).join(", ");
