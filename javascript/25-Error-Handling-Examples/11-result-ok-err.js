function ok(value) { return { ok: true, value }; }
function err(error) { return { ok: false, error }; }
function parseAge(s) {
  const n = Number(s);
  if (Number.isNaN(n) || n < 0) return err("invalid age");
  return ok(n);
}
const out = document.getElementById("out");
const r1 = parseAge("25");
const r2 = parseAge("x");
out.textContent = [
  r1.ok ? "ok: " + r1.value : "err: " + r1.error,
  r2.ok ? "ok: " + r2.value : "err: " + r2.error,
].join("\n");
