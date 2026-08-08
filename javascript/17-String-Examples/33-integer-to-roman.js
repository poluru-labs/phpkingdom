function intToRoman(num) {
  const map = [
    [1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],
    [100,"C"],[90,"XC"],[50,"L"],[40,"XL"],
    [10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]
  ];
  let out = "";
  for (const [v, sym] of map) {
    while (num >= v) { out += sym; num -= v; }
  }
  return out;
}
document.getElementById("out").textContent = intToRoman(1994);
