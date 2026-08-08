function isValid(s) {
  const stack = [];
  const map = { ")": "(", "]": "[", "}": "{" };
  for (const ch of s) {
    if ("([{".includes(ch)) stack.push(ch);
    else if (map[ch]) {
      if (stack.pop() !== map[ch]) return false;
    }
  }
  return stack.length === 0;
}
document.getElementById("out").textContent =
  isValid("()[]{}") + " / " + isValid("(]");
