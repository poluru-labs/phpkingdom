function isValid(s) {
  const pairs = { ")": "(", "]": "[", "}": "{" };
  const stack = [];
  for (const ch of s) {
    if ("([{".includes(ch)) stack.push(ch);
    else if (")]}".includes(ch)) {
      if (stack.pop() !== pairs[ch]) return false;
    }
  }
  return stack.length === 0;
}
const tests = ["()", "()[]{}", "(]", "([{}])", "{[()]}"];
document.getElementById("out").textContent = tests.map(t => t + " => " + isValid(t)).join("\n");
