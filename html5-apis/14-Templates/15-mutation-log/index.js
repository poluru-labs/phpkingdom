const host = document.getElementById("host");
new MutationObserver((m) => {
  document.getElementById("out").textContent = m.map(x => x.type + " +" + x.addedNodes.length).join("\n");
}).observe(host, { childList: true });
document.getElementById("go").onclick = () => host.appendChild(document.createElement("span")).textContent = "•";
