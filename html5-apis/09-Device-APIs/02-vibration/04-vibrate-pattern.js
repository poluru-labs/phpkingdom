document.getElementById("go").onclick = () => {
  const ok = navigator.vibrate ? navigator.vibrate([100, 50, 100]) : false;
  document.getElementById("out").textContent = "vibrate returned " + ok;
};
