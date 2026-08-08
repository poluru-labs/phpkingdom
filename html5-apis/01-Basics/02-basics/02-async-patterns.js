Promise.resolve("ready").then((v) => {
  document.getElementById("out").textContent = "Promise resolved: " + v;
});
