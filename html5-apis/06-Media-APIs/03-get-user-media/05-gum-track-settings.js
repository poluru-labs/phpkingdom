document.getElementById("go").onclick = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    const t = stream.getVideoTracks()[0];
    document.getElementById("out").textContent = JSON.stringify(t.getSettings(), null, 2);
    stream.getTracks().forEach(x => x.stop());
  } catch (e) {
    document.getElementById("out").textContent = e.message;
  }
};
