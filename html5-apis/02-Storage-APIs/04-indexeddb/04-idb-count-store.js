document.getElementById("go").onclick = () => {
  const req = indexedDB.open("pk-demo-db", 1);
  req.onupgradeneeded = () => {
    const db = req.result;
    if (!db.objectStoreNames.contains("notes")) db.createObjectStore("notes", { keyPath: "id", autoIncrement: true });
  };
  req.onsuccess = () => {
    const db = req.result;
    const tx = db.transaction("notes", "readonly");
    const c = tx.objectStore("notes").count();
    c.onsuccess = () => { document.getElementById("out").textContent = "count=" + c.result; db.close(); };
  };
  req.onerror = () => { document.getElementById("out").textContent = req.error; };
};
