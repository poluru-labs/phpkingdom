async function answer() { return 42; }
const p = answer();
document.getElementById("out").textContent =
  "isPromise=" + (p instanceof Promise) + "\n";
p.then((v) => {
  document.getElementById("out").textContent += "value=" + v;
});
