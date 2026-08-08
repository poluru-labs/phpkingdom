Promise.any([
  Promise.reject(new Error("1")),
  new Promise((resolve) => setTimeout(() => resolve("first success"), 120)),
  Promise.reject(new Error("3"))
]).then((value) => {
  document.getElementById("out").textContent = value;
}).catch((err) => {
  document.getElementById("out").textContent = err.name + ": " + err.message;
});
