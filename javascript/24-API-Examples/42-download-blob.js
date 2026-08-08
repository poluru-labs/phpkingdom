async function downloadTextFile() {
  const blob = new Blob(["Hello from phpkingdom.com"], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "hello.txt";
  a.textContent = "Download hello.txt";
  document.getElementById("out").textContent = "Blob URL ready: ";
  document.getElementById("out").append(a);
  // const res = await fetch("/api/export"); const blob = await res.blob();
}
downloadTextFile();
