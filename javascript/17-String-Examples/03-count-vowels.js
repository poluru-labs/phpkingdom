function countVowels(s) {
  return (s.toLowerCase().match(/[aeiou]/g) || []).length;
}
document.getElementById("out").textContent = String(countVowels("phpkingdom.com"));
