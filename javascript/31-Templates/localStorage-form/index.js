const KEY = "pk-tpl-name";
const input = document.getElementById("name");
input.value = localStorage.getItem(KEY) || "";
document.getElementById("out").textContent = "loaded=" + (input.value || "(empty)");
document.getElementById("save").onclick = () => {
  localStorage.setItem(KEY, input.value);
  document.getElementById("out").textContent = "saved=" + input.value;
};
