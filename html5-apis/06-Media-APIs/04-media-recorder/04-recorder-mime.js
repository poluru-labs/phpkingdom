const types = ["video/webm", "video/webm;codecs=vp9", "audio/webm;codecs=opus"];
document.getElementById("out").textContent = types.map(t =>
  t + ": " + (window.MediaRecorder && MediaRecorder.isTypeSupported(t))
).join("\n");
