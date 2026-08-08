function decodeString(s) {
  const counts = [], strings = [""];
  let num = 0;
  for (const ch of s) {
    if (ch >= "0" && ch <= "9") num = num * 10 + Number(ch);
    else if (ch === "[") {
      counts.push(num); strings.push(""); num = 0;
    } else if (ch === "]") {
      const repeat = counts.pop();
      const decoded = strings.pop().repeat(repeat);
      strings[strings.length - 1] += decoded;
    } else strings[strings.length - 1] += ch;
  }
  return strings[0];
}
const input = "3[a2[c]]";
document.getElementById("out").textContent =
  "input:  " + JSON.stringify(input) + "\noutput: " + JSON.stringify(decodeString(input));
