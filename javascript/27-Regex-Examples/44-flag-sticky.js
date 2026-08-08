const text = "abc abc abc";
const re = /abc/y;
const hits = [];
let m;
while ((m = re.exec(text)) !== null) {
  hits.push("index " + m.index + ": " + m[0]);
  re.lastIndex += 1;
}
document.getElementById("out").textContent = hits.join("\n");
