function moveZeros(arr) {
  const nonZero = arr.filter((n) => n !== 0);
  const zeros = arr.filter((n) => n === 0);
  return nonZero.concat(zeros);
}
document.getElementById("out").textContent = moveZeros([0,1,0,3,12]).join(", ");
