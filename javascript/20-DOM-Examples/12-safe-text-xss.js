document.getElementById("btn").onclick = () => {
  const value = document.getElementById("raw").value;
  document.getElementById("safe").textContent = value;
};
