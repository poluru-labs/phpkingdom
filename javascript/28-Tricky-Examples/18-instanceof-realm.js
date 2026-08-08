const arr = [];
document.getElementById("out").textContent =
  "arr instanceof Array => " + (arr instanceof Array) + "\n" +
  "Array.isArray(arr) => " + Array.isArray(arr) + "\n" +
  "Prefer Array.isArray for reliability.";
