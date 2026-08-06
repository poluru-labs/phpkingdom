Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
]).then((vals) => {
  document.getElementById("out").textContent = vals.join(",");
});
