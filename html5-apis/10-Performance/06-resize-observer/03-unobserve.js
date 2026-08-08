const box = document.getElementById("box");
const ro = new ResizeObserver(() => { document.getElementById("out").textContent = "resized"; });
ro.observe(box);
document.getElementById("go").onclick = () => { ro.unobserve(box); document.getElementById("out").textContent = "unobserved"; };
