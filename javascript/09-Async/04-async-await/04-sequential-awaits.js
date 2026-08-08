(async () => {
  const a = await Promise.resolve(1);
  const b = await Promise.resolve(2);
  document.getElementById("out").textContent = String(a + b);
})();
