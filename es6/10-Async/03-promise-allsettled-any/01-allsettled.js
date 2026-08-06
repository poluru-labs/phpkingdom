Promise.allSettled([
  Promise.resolve("a"),
  Promise.reject("b"),
]).then((r) => {
  document.getElementById("out").textContent = r.map((x) => x.status).join(",");
});
