function convert(s, numRows) {
  if (numRows === 1 || s.length <= numRows) return s;
  const rows = Array.from({ length: numRows }, () => "");
  let r = 0, dir = 1;
  for (const ch of s) {
    rows[r] += ch;
    if (r === 0) dir = 1;
    else if (r === numRows - 1) dir = -1;
    r += dir;
  }
  return rows.join("");
}
document.getElementById("out").textContent = convert("PAYPALISHIRING", 3);
