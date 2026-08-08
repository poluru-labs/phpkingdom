Promise.any([
  Promise.reject(new Error("A")),
  Promise.reject(new Error("B"))
]).then((v) => {
  document.getElementById("out").textContent = v;
}).catch((err) => {
  const messages = err.errors ? err.errors.map((e) => e.message).join(", ") : err.message;
  document.getElementById("out").textContent = err.name + " => " + messages;
});
