const out = document.getElementById("out");
const btn = document.getElementById("btn");
btn.addEventListener("mousedown", () => { out.textContent = "mousedown"; });
btn.addEventListener("mouseup", () => { out.textContent += " → mouseup"; });
btn.addEventListener("click", () => { out.textContent += " → click"; });
