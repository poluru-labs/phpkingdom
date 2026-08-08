function evalRPN(tokens) {
  const stack = [];
  const ops = {
    "+": (a, b) => a + b, "-": (a, b) => a - b,
    "*": (a, b) => a * b, "/": (a, b) => (a / b) | 0
  };
  for (const t of tokens) {
    if (t in ops) {
      const b = stack.pop(), a = stack.pop();
      stack.push(ops[t](a, b));
    } else stack.push(Number(t));
  }
  return stack[0];
}
const tokens = ["2", "1", "+", "3", "*"];
document.getElementById("out").textContent =
  "tokens: " + JSON.stringify(tokens) + "\n" +
  "result: " + evalRPN(tokens);
