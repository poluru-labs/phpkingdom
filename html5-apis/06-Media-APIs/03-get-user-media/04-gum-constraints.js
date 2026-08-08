let stream;
document.getElementById("go").onclick = async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: { width: { ideal: 640 }, height: { ideal: 360 } },
    });
    document.getElementById("v").srcObject = stream;
    document.getElementById("out").textContent = "tracks=" + stream.getTracks().length;
  } catch (e) {
    document.getElementById("out").textContent = e.name + ": " + e.message;
  }
};
document.getElementById("stop").onclick = () => {
  stream?.getTracks().forEach(t => t.stop());
  document.getElementById("v").srcObject = null;
  document.getElementById("out").textContent = "stopped";
};
