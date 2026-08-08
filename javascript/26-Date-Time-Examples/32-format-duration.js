function formatDuration(ms) {
  const totalSec = Math.floor(ms / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  return String(h).padStart(2,"0") + ":" + String(m).padStart(2,"0") + ":" + String(s).padStart(2,"0");
}
const ms = (2 * 3600 + 5 * 60 + 7) * 1000;
document.getElementById("out").textContent = "2h 5m 7s => " + formatDuration(ms);
