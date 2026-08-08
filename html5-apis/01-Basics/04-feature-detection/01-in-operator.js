document.getElementById("out").textContent = [
  "'geolocation' in navigator → " + ("geolocation" in navigator),
  "'localStorage' in window → " + ("localStorage" in window),
  "typeof fetch → " + typeof fetch,
].join("\n");
