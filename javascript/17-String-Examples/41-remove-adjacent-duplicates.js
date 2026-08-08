function removeAdjacentDuplicates(s) {
  const stack = [];
  for (const ch of s) {
    if (stack.length && stack[stack.length - 1] === ch) stack.pop();
    else stack.push(ch);
  }
  return stack.join("");
}
document.getElementById("out").textContent = removeAdjacentDuplicates("abbaca");
