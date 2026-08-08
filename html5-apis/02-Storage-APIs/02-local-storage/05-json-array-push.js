const KEY = "pk:items";
document.getElementById("go").onclick = () => {
  const arr = JSON.parse(localStorage.getItem(KEY) || "[]");
  arr.push({ t: Date.now() });
  localStorage.setItem(KEY, JSON.stringify(arr));
  document.getElementById("out").textContent = JSON.stringify(arr, null, 2);
};
