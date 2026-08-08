function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open("pk-tpl-idb", 1);
    req.onupgradeneeded = () => req.result.createObjectStore("items", { keyPath: "id" });
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
document.getElementById("save").onclick = async () => {
  const db = await openDB();
  const tx = db.transaction("items", "readwrite");
  tx.objectStore("items").put({ id: "greeting", text: document.getElementById("val").value });
  tx.oncomplete = () => { document.getElementById("out").textContent = "saved"; db.close(); };
};
document.getElementById("load").onclick = async () => {
  const db = await openDB();
  const tx = db.transaction("items", "readonly");
  const g = tx.objectStore("items").get("greeting");
  g.onsuccess = () => { document.getElementById("out").textContent = JSON.stringify(g.result); db.close(); };
};
