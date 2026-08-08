function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}
delay(250, "done").then((v) => {
  document.getElementById("out").textContent = v;
});
