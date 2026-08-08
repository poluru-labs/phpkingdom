const KEY = "pk:sess-count";
document.getElementById("go").onclick = () => {
  const n = Number(sessionStorage.getItem(KEY) || 0) + 1;
  sessionStorage.setItem(KEY, String(n));
  document.getElementById("out").textContent = "count=" + n + " (reload keeps; new tab resets)";
};
document.getElementById("out").textContent = "count=" + (sessionStorage.getItem(KEY) || 0);
