function countConsonants(s) {
  return (s.toLowerCase().match(/[bcdfghjklmnpqrstvwxyz]/g) || []).length;
}
document.getElementById("out").textContent = String(countConsonants("JavaScript"));
