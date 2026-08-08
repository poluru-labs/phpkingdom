const zone = document.getElementById("zone");
zone.ondragover = (e) => { e.preventDefault(); };
zone.ondrop = (e) => {
  e.preventDefault();
  const names = [...e.dataTransfer.files].map(f => f.name);
  document.getElementById("out").textContent = names.join("\n") || "(no files)";
};
