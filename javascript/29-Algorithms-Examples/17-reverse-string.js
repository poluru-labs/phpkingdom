function reverseString(s) {
  const chars = s.split("");
  let lo = 0, hi = chars.length - 1;
  while (lo < hi) {
    [chars[lo], chars[hi]] = [chars[hi], chars[lo]];
    lo++; hi--;
  }
  return chars.join("");
}
const input = "hello";
document.getElementById("out").textContent =
  "input:  " + input + "\noutput: " + reverseString(input);
