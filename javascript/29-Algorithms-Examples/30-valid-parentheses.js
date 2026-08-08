function isValid(s) {
  const stack = [];
  const pairs = { ")": "(", "]": "[", "}": "{" };
  for (const ch of s) {
    if ("([{".includes(ch)) stack.push(ch);
    else if (stack.pop() !== pairs[ch]) return false;
  }
  return stack.length === 0;
}
const samples = ["()", "()[]{}", "(]", "{[]}"];
document.getElementById("out").textContent = samples.map(s =>
  JSON.stringify(s) + " => " + isValid(s)
).join("\n");
