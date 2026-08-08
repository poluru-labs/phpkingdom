const out = document.getElementById("out");
["a", "b"].forEach((id) => {
  const el = document.getElementById(id);
  el.addEventListener("focus", () => {
    el.style.outline = "2px solid teal";
    out.textContent = id + " focused";
  });
  el.addEventListener("blur", () => {
    el.style.outline = "";
    out.textContent = id + " blurred";
  });
});
