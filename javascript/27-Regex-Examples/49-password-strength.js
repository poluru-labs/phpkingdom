const passwords = ["weak", "Strong1!", "NoDigit!", "short1!"];
const rules = [
  [/.{8,}/, "8+ chars"],
  [/[a-z]/, "lowercase"],
  [/[A-Z]/, "uppercase"],
  [/\d/, "digit"],
  [/[^\w\s]/, "symbol"]
];
function score(pw) {
  return rules.filter(([re]) => re.test(pw)).map(([, label]) => label);
}
const lines = passwords.map(p => p + " => " + score(p).join(", "));
document.getElementById("out").textContent = lines.join("\n");
