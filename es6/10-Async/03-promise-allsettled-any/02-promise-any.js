Promise.any([
  Promise.reject("x"),
  Promise.resolve("yes"),
]).then((v) => {
  document.getElementById("out").textContent = v;
});
