const arr = [1, 2];
arr.push(3);
const obj = { a: 1 };
obj.a = 9;
document.getElementById("out").textContent =
  "arr=" + arr.join(",") + " obj.a=" + obj.a;
