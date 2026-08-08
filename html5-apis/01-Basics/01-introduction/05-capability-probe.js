document.getElementById("go").onclick = () => {
  const rows = [
    ["fetch", typeof fetch === "function"],
    ["localStorage", typeof localStorage !== "undefined"],
    ["Worker", typeof Worker === "function"],
    ["geolocation", "geolocation" in navigator],
  ];
  document.getElementById("out").textContent = rows.map(([k,v]) => k + ": " + v).join("\n");
};
