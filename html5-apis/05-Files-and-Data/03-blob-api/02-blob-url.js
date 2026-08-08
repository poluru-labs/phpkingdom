const blob = new Blob(["Hello from Blob"], { type: "text/plain" });
const url = URL.createObjectURL(blob);
document.getElementById("link").href = url;
document.getElementById("out").textContent = "object URL created (revoke when done)";
