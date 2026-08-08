document.getElementById("go").onclick = () => {
  const ok = navigator.vibrate && navigator.vibrate(0);
  document.getElementById("out").textContent = "cancel => " + ok;
};
