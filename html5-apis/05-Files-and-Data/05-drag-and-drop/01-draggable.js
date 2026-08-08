const item = document.getElementById("item");
const zone = document.getElementById("zone");
item.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", "drag-item");
});
zone.addEventListener("dragover", (e) => e.preventDefault());
zone.addEventListener("drop", (e) => {
  e.preventDefault();
  zone.appendChild(item);
  document.getElementById("out").textContent = "dropped: " + e.dataTransfer.getData("text/plain");
});
