document.getElementById("go").onclick = () => {
  try {
    JSON.parse("{bad");
  } catch (e) {
    document.getElementById("out").textContent = e.name + ": " + e.message;
  }
};
