function decodeRLE(s) {
  let out = "", i = 0;
  while (i < s.length) {
    const ch = s[i++];
    let num = "";
    while (i < s.length && /\d/.test(s[i])) num += s[i++];
    out += ch.repeat(Number(num || 1));
  }
  return out;
}
document.getElementById("out").textContent = decodeRLE("a2b1c5");
