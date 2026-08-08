const box = document.getElementById("box");
const mo = new MutationObserver((muts) => {
  document.getElementById("out").textContent = muts.map(m => m.attributeName + "=" + box.getAttribute(m.attributeName)).join("\n");
});
mo.observe(box, { attributes: true, attributeFilter: ["data-state"] });
document.getElementById("go").onclick = () => {
  box.dataset.state = box.dataset.state === "idle" ? "on" : "idle";
};
