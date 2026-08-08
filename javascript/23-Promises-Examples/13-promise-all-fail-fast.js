Promise.all([
  Promise.resolve("ok"),
  Promise.reject(new Error("second failed")),
  Promise.resolve("never used")
]).then((values) => {
  document.getElementById("out").textContent = values.join(",");
}).catch((err) => {
  document.getElementById("out").textContent = "all rejected: " + err.message;
});
