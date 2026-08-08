const inner = Promise.resolve("inner");
Promise.resolve(inner).then((v) => {
  document.getElementById("out").textContent =
    "value=" + v + " (not a nested Promise object)";
});
