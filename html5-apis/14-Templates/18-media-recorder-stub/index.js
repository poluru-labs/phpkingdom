const types = ["video/webm", "audio/webm"];
document.getElementById("out").textContent = "MediaRecorder=" + (typeof MediaRecorder) + "\n" +
  types.map(t => t + ": " + (window.MediaRecorder && MediaRecorder.isTypeSupported(t))).join("\n");
