const KEY = "pk:notes:v1";
document.getElementById("save").onclick = () => {
  localStorage.setItem(KEY, document.getElementById("note").value);
  document.getElementById("out").textContent = "saved " + KEY;
};
document.getElementById("load").onclick = () => {
  document.getElementById("out").textContent = localStorage.getItem(KEY) || "(none)";
};
