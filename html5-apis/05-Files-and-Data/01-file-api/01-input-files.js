document.getElementById("f").onchange = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  document.getElementById("out").textContent =
    "name=" + file.name + "\nsize=" + file.size + "\ntype=" + file.type;
};
