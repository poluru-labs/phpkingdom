function show(files) {
  document.getElementById("out").textContent = [...files].map(f => f.name + " (" + f.size + ")").join("\n");
}
const zone = document.getElementById("zone");
zone.ondragover = (e) => e.preventDefault();
zone.ondrop = (e) => { e.preventDefault(); show(e.dataTransfer.files); };
document.getElementById("f").onchange = (e) => show(e.target.files);
