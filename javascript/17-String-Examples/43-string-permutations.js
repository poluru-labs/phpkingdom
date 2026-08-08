function permutations(s) {
  const out = [];
  function dfs(path, rest) {
    if (!rest.length) { out.push(path); return; }
    for (let i = 0; i < rest.length; i++) {
      dfs(path + rest[i], rest.slice(0, i) + rest.slice(i + 1));
    }
  }
  dfs("", s);
  return [...new Set(out)];
}
document.getElementById("out").textContent = permutations("abc").join(", ");
