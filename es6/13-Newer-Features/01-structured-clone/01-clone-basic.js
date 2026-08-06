const a = { n: 1, nested: { ok: true } };
const b = structuredClone(a);
b.nested.ok = false;
document.getElementById("out").textContent =
  "a.ok=" + a.nested.ok + " b.ok=" + b.nested.ok;
