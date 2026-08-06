Promise.race([
  Promise.resolve("fast"),
  new Promise((r) => setTimeout(() => r("slow"), 50)),
]).then((v) => {
  document.getElementById("out").textContent = v;
});
