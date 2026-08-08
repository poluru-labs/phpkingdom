document.getElementById("go").onclick = async () => {
  if (!("caches" in window)) return;
  const keys = await caches.keys();
  document.getElementById("out").textContent = keys.join("\n") || "(no caches)";
};
