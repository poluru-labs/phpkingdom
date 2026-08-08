const wrap = document.getElementById("wrap");
const out = document.getElementById("out");
wrap.addEventListener("focusin", (e) => {
  out.textContent = "focusin → " + e.target.id;
});
wrap.addEventListener("focusout", (e) => {
  out.textContent = "focusout → " + e.target.id;
});
