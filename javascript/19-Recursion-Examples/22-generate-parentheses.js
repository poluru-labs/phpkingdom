function generateParentheses(n) {
  const result = [];
  function backtrack(open, close, s) {
    if (s.length === n * 2) {
      result.push(s);
      return;
    }
    if (open < n) backtrack(open + 1, close, s + "(");
    if (close < open) backtrack(open, close + 1, s + ")");
  }
  backtrack(0, 0, "");
  return result;
}
document.getElementById("out").textContent = generateParentheses(3).join("\n");
