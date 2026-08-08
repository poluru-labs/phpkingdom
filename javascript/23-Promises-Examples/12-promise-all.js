Promise.all([
  Promise.resolve("html"),
  Promise.resolve("css"),
  Promise.resolve("js")
]).then((values) => {
  document.getElementById("out").textContent = values.join(" + ");
});
