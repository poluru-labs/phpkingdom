const KEY = "pk:tpl:draft";
const ta = document.getElementById("draft");
ta.value = sessionStorage.getItem(KEY) || "";
ta.oninput = () => { sessionStorage.setItem(KEY, ta.value); document.getElementById("out").textContent = "saved " + ta.value.length + " chars"; };
document.getElementById("out").textContent = "restored " + ta.value.length + " chars";
