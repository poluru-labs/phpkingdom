Promise.allSettled([
  Promise.resolve("A"),
  Promise.reject(new Error("B")),
  Promise.resolve("C")
]).then((results) => {
  document.getElementById("out").textContent = JSON.stringify(results, null, 2);
});
