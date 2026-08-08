const req = indexedDB.open("phpkingdom-demo2", 1);
req.onupgradeneeded = () => {
  const db = req.result;
  if (!db.objectStoreNames.contains("items")) db.createObjectStore("items", { keyPath: "id" });
};
req.onsuccess = () => {
  const db = req.result;
  const tx = db.transaction("items", "readwrite");
  tx.objectStore("items").put({ id: 1, title: "Hello IndexedDB" });
  tx.oncomplete = () => {
    const r = db.transaction("items").objectStore("items").get(1);
    r.onsuccess = () => {
      document.getElementById("out").textContent = JSON.stringify(r.result);
      db.close();
    };
  };
};
