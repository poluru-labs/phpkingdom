document.getElementById("go").onclick = async () => {
  if (!("caches" in window)) { document.getElementById("out").textContent = "no caches"; return; }
  await caches.open("pk-tpl-shell");
  document.getElementById("out").textContent = (await caches.keys()).join("\n");
};
