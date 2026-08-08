const blob = new Blob(["Hello phpkingdom.com"], { type: "text/plain" });
document.getElementById("out").textContent =
  "size=" + blob.size + " type=" + blob.type;
