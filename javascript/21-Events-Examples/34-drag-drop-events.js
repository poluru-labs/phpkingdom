const out = document.getElementById("out");
document.getElementById("item").addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", "item");
  out.textContent = "dragstart";
});
const zone = document.getElementById("zone");
zone.addEventListener("dragover", (e) => { e.preventDefault(); });
zone.addEventListener("drop", (e) => {
  e.preventDefault();
  zone.appendChild(document.getElementById("item"));
  out.textContent = "dropped: " + e.dataTransfer.getData("text/plain");
});
