document.getElementById("go").onclick = () => {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) keys.push(localStorage.key(i));
  document.getElementById("out").textContent = keys.slice(0, 12).join("\n") || "(empty)";
};
