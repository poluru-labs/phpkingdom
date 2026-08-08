function addBinary(a, b) {
  let i = a.length - 1, j = b.length - 1, carry = 0, out = "";
  while (i >= 0 || j >= 0 || carry) {
    const sum = carry + (i >= 0 ? Number(a[i--]) : 0) + (j >= 0 ? Number(b[j--]) : 0);
    out = (sum % 2) + out;
    carry = Math.floor(sum / 2);
  }
  return out;
}
document.getElementById("out").textContent = addBinary("1010", "1011");
