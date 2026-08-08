document.getElementById("btn").onclick = () => {
  if (!navigator.vibrate) {
    document.getElementById("out").textContent = "not supported";
    return;
  }
  navigator.vibrate([150, 80, 150]);
  document.getElementById("out").textContent = "pattern sent";
};
