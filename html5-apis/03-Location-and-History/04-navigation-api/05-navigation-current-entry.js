document.getElementById("go").onclick = () => {
  if (!window.navigation) {
    document.getElementById("out").textContent = "Navigation API not available";
    return;
  }
  const e = navigation.currentEntry;
  document.getElementById("out").textContent = "url=" + (e && e.url) + "\nkey=" + (e && e.key);
};
