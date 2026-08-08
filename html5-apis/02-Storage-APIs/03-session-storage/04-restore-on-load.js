const KEY = "pk:session-draft";
const el = document.getElementById("draft");
el.value = sessionStorage.getItem(KEY) || "";
document.getElementById("out").textContent = "restored=" + Boolean(el.value);
el.addEventListener("input", () => sessionStorage.setItem(KEY, el.value));
