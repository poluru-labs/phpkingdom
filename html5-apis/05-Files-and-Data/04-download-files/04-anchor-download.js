document.getElementById("go").onclick = () => {
  const blob = new Blob(["Hello from phpkingdom"], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "note.txt";
  a.click();
  URL.revokeObjectURL(url);
  document.getElementById("out").textContent = "download triggered";
};
