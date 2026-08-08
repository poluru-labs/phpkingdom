document.getElementById("go").onclick = () => {
  if (!navigator.canShare) {
    document.getElementById("out").textContent = "canShare missing";
    return;
  }
  document.getElementById("out").textContent =
    "canShare text=" + navigator.canShare({ text: "hi" });
};
