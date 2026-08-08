document.getElementById("go").onclick = () => {
  const keys = ["fetch", "indexedDB", "caches", "crypto", "matchMedia"];
  document.getElementById("out").textContent =
    keys.map(k => k + ": " + (k in window)).join("\n");
};
