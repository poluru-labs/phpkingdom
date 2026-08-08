const btn = document.createElement("button");
btn.type = "button";
btn.textContent = "Click to resolve";
document.body.insertBefore(btn, document.getElementById("out"));
function onceClick(el) {
  return new Promise((resolve) => {
    el.addEventListener("click", () => resolve("clicked"), { once: true });
  });
}
document.getElementById("out").textContent = "waiting for click...";
onceClick(btn).then((msg) => {
  document.getElementById("out").textContent = msg;
});
