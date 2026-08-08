const nav = performance.getEntriesByType("navigation")[0];
document.getElementById("out").textContent = nav
  ? "type=" + nav.type + "\ndomContentLoaded≈" + nav.domContentLoadedEventEnd.toFixed(1)
  : "no navigation entry";
