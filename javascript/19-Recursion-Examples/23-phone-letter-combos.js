const map = { 2: "abc", 3: "def", 4: "ghi", 5: "jkl", 6: "mno", 7: "pqrs", 8: "tuv", 9: "wxyz" };
function letterCombos(digits, i = 0, path = "", result = []) {
  if (i === digits.length) {
    if (path) result.push(path);
    return result;
  }
  for (const ch of map[digits[i]]) {
    letterCombos(digits, i + 1, path + ch, result);
  }
  return result;
}
document.getElementById("out").textContent = letterCombos("23").join("\n");
