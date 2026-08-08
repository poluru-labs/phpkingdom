const a = document.getElementById("anchor");
document.getElementById("before").onclick = () => {
  a.insertAdjacentHTML("beforebegin", "<em>before </em>");
};
document.getElementById("after").onclick = () => {
  a.insertAdjacentHTML("afterend", " <strong>after</strong>");
};
