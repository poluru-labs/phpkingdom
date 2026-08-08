function generateParenthesis(n) {
  const out = [];
  function dfs(cur, open, close) {
    if (cur.length === n * 2) { out.push(cur); return; }
    if (open < n) dfs(cur + "(", open + 1, close);
    if (close < open) dfs(cur + ")", open, close + 1);
  }
  dfs("", 0, 0);
  return out;
}
document.getElementById("out").textContent = generateParenthesis(3).join(" | ");
