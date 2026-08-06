(async () => {
  const value = await Promise.resolve("ready");
  document.getElementById("out").textContent = value;
})();
