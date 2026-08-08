function* range(start, end) {
  for (let i = start; i <= end; i++) yield i;
}
const values = [...range(1, 5)];
document.getElementById("out").textContent = values.join(", ");
