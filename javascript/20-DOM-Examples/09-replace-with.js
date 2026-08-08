document.getElementById("btn").onclick = () => {
  const neu = document.createElement("h3");
  neu.textContent = "Replaced with h3";
  document.getElementById("old").replaceWith(neu);
};
