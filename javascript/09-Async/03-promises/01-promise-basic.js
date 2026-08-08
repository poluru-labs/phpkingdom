const p = new Promise(function (resolve) {
  setTimeout(function () { resolve("done"); }, 300);
});
p.then(function (value) {
  document.getElementById("out").textContent = value;
});
