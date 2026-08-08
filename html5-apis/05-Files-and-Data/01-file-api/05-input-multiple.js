document.getElementById("f").onchange = (e) => {
  const names = [...e.target.files].map(f => f.name + " (" + f.size + ")");
  document.getElementById("out").textContent = names.join("\n") || "(none)";
};
