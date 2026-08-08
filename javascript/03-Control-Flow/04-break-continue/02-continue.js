let text = "";
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  text += i + " ";
}
document.getElementById("out").textContent = text;
