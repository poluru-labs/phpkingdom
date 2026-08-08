const link = document.getElementById("link");
const out = document.getElementById("out");
function show() {
  out.textContent =
    "href=" + link.getAttribute("href") +
    " | target=" + link.getAttribute("target") +
    " | title=" + link.getAttribute("title");
}
show();
document.getElementById("set").onclick = () => {
  link.setAttribute("title", "Author site");
  show();
};
document.getElementById("rm").onclick = () => {
  link.removeAttribute("target");
  show();
};
