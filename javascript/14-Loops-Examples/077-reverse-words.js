const s = "hello world loops";
const words = s.split(" ");
for (let i = 0; i < words.length; i++) {
  let rev = "";
  for (let j = words[i].length - 1; j >= 0; j--) rev += words[i][j];
  words[i] = rev;
}
document.getElementById("out").textContent = words.join(" ");
