const item = document.getElementById("item");
const zone = document.getElementById("zone");
const out = document.getElementById("out");
item.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", "drag-item");
});
zone.addEventListener("dragover", (e) => e.preventDefault());
zone.addEventListener("drop", (e) => {
  e.preventDefault();
  zone.appendChild(item);
  out.textContent = "dropped";
});
