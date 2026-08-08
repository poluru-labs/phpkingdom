const s = "java script loops";
const words = s.split(" ");
for (let i = 0; i < words.length; i++) {
  if (!words[i]) continue;
  words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}
document.getElementById("out").textContent = words.join(" ");
