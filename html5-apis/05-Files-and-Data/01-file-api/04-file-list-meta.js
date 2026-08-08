document.getElementById("f").onchange = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  document.getElementById("out").textContent =
    file.name + "\n" + file.size + " bytes\n" + file.type;
};
