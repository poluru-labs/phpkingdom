queueMicrotask(() => {
  document.getElementById("out").textContent = "ran after stack cleared";
});
