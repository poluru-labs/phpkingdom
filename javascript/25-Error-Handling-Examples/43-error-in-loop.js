const out = document.getElementById("out");
const inputs = ["1", "x", "3"];
const ok = [];
const bad = [];
for (const s of inputs) {
  const n = Number(s);
  if (Number.isNaN(n)) {
    bad.push(s);
    continue;
  }
  ok.push(n);
}
out.textContent = "ok: [" + ok + "]\ninvalid: [" + bad + "]";
