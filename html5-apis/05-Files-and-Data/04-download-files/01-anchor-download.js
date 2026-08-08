const blob = new Blob(["Saved from html5-apis"], { type: "text/plain" });
document.getElementById("dl").href = URL.createObjectURL(blob);
