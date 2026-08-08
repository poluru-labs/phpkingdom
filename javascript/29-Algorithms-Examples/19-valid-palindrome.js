function isPalindrome(s) {
  let lo = 0, hi = s.length - 1;
  while (lo < hi) {
    while (lo < hi && !/[a-z0-9]/i.test(s[lo])) lo++;
    while (lo < hi && !/[a-z0-9]/i.test(s[hi])) hi--;
    if (s[lo].toLowerCase() !== s[hi].toLowerCase()) return false;
    lo++; hi--;
  }
  return true;
}
const samples = ["A man, a plan, a canal: Panama", "race a car"];
document.getElementById("out").textContent = samples.map(s =>
  JSON.stringify(s) + " => " + isPalindrome(s)
).join("\n");
