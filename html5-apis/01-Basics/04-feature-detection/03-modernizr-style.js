const features = {
  canvas: !!document.createElement("canvas").getContext,
  worker: typeof Worker !== "undefined",
  sse: typeof EventSource !== "undefined",
};
document.getElementById("out").textContent = JSON.stringify(features, null, 2);
