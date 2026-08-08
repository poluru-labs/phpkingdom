const types = ["video/webm", "video/webm;codecs=vp9", "audio/webm"];
document.getElementById("out").textContent = types
  .map((t) => t + " → " + (typeof MediaRecorder !== "undefined" && MediaRecorder.isTypeSupported?.(t)))
  .join("\n");
