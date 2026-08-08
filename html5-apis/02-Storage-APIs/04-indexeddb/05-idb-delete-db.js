document.getElementById("go").onclick = () => {
  const req = indexedDB.deleteDatabase("pk-demo-db");
  req.onsuccess = () => { document.getElementById("out").textContent = "deleted"; };
  req.onerror = () => { document.getElementById("out").textContent = String(req.error); };
};
