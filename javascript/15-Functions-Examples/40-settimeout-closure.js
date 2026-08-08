const labels = [];
for (let i = 1; i <= 3; i++) {
  setTimeout(() => labels.push("tick-" + i), i * 20);
}
setTimeout(() => {
  document.getElementById("out").textContent = labels.join("\n");
}, 100);
