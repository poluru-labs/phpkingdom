const zone = document.getElementById("zone");
zone.addEventListener("dragover", (e) => e.preventDefault());
zone.addEventListener("drop", (e) => {
  e.preventDefault();
  const names = [...e.dataTransfer.files].map((f) => f.name);
  document.getElementById("out").textContent = names.join("\n") || "(no files)";
});
