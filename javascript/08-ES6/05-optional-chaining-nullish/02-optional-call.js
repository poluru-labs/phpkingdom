const cb = undefined;
const ok = () => "ran";
document.getElementById("out").textContent = String(cb?.()) + " / " + ok?.();
