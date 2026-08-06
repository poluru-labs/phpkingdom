Promise.all([
  Promise.resolve(1),
  Promise.reject(new Error("nope")),
]).catch((e) => {
  document.getElementById("out").textContent = e.message;
});
