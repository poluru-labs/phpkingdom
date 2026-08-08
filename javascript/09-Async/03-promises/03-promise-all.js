Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
]).then(function (values) {
  document.getElementById("out").textContent = values.join(", ");
});
