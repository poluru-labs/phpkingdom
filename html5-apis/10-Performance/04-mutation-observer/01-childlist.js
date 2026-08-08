const list = document.getElementById("list");
const mo = new MutationObserver((muts) => {
  document.getElementById("out").textContent =
    "mutations=" + muts.length + " children=" + list.children.length;
});
mo.observe(list, { childList: true });
let n = 1;
document.getElementById("btn").onclick = () => {
  n += 1;
  const li = document.createElement("li");
  li.textContent = "Item " + n;
  list.appendChild(li);
};
