const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#333";
ctx.fillRect(0, 0, canvas.width, canvas.height);
document.getElementById("btn").onclick = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};
