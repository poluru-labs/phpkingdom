document.getElementById("go").onclick = () => {
  const url = URL.createObjectURL(new Blob(["x"]));
  URL.revokeObjectURL(url);
  document.getElementById("out").textContent = "created and revoked:\n" + url.slice(0, 40) + "…";
};
