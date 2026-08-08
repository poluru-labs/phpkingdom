function separateEvenOdd(arr) {
  return arr.filter((n) => n % 2 === 0).concat(arr.filter((n) => n % 2 !== 0));
}
document.getElementById("out").textContent = separateEvenOdd([1,2,3,4,5,6]).join(", ");
