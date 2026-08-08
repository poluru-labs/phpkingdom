const host = document.getElementById("host");
const mo = new MutationObserver((muts) => {
  document.getElementById("out").textContent = muts.map(m => m.type + " +" + m.addedNodes.length).join("\n");
});
mo.observe(host, { childList: true });
document.getElementById("go").onclick = () => {
  host.appendChild(document.createTextNode("•"));
};
