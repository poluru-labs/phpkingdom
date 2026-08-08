document.getElementById("f").onchange = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => { document.getElementById("preview").src = reader.result; };
  reader.readAsDataURL(file);
};
