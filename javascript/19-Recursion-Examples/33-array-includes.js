function arrayIncludes(arr, target, i = 0) {
  if (i >= arr.length) return false;
  if (arr[i] === target) return true;
  return arrayIncludes(arr, target, i + 1);
}
const fruits = ["apple", "banana", "cherry"];
document.getElementById("out").textContent =
  "banana: " + arrayIncludes(fruits, "banana") + "\ngrape: " + arrayIncludes(fruits, "grape");
