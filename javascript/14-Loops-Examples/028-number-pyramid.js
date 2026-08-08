const N = 5;
const lines = [];
for (let i = 1; i <= N; i++) {
  const spaces = " ".repeat(N - i);
  let nums = "";
  for (let j = 1; j <= i; j++) nums += j;
  for (let j = i - 1; j >= 1; j--) nums += j;
  lines.push(spaces + nums);
}
document.getElementById("out").textContent = lines.join("\n");
