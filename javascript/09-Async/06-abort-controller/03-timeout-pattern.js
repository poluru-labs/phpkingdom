const c = new AbortController();
const t = setTimeout(() => c.abort("timeout"), 30);
setTimeout(() => {
  document.getElementById("out").textContent = "aborted=" + c.signal.aborted + " reason=" + c.signal.reason;
  clearTimeout(t);
}, 50);
