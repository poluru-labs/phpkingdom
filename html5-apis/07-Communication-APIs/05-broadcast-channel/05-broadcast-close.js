document.getElementById("go").onclick = () => {
  const ch = new BroadcastChannel("pk-temp");
  ch.close();
  document.getElementById("out").textContent = "BroadcastChannel opened and closed";
};
