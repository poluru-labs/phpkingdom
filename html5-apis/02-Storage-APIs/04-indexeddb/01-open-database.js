if (!indexedDB) {
  document.getElementById("out").textContent = "IndexedDB missing";
} else {
  const req = indexedDB.open("phpkingdom-demo", 1);
  req.onupgradeneeded = () => {
    const db = req.result;
    if (!db.objectStoreNames.contains("notes")) db.createObjectStore("notes", { keyPath: "id" });
  };
  req.onsuccess = () => {
    document.getElementById("out").textContent = "opened: " + req.result.name;
    req.result.close();
  };
  req.onerror = () => {
    document.getElementById("out").textContent = "error opening DB";
  };
}
