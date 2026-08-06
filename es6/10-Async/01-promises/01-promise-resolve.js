Promise.resolve("ok").then((v) => {
  document.getElementById("out").textContent = "resolved: " + v;
});
