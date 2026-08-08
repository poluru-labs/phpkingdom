document.getElementById("go").onclick = () => {
  const c = new AbortController();
  let n = 0;
  c.signal.addEventListener("abort", () => { n++; });
  c.signal.addEventListener("abort", () => { n++; });
  c.abort();
  document.getElementById("out").textContent = "listeners fired count≈" + n;
};
