document.getElementById("f").onchange = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    document.getElementById("out").textContent = String(reader.result).slice(0, 400);
  };
  reader.readAsText(file);
};
