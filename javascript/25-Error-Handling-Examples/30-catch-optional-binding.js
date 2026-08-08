const out = document.getElementById("out");
let ok = false;
try {
  JSON.parse("not json");
  ok = true;
} catch {
  ok = false;
}
out.textContent = ok ? "parsed" : "invalid JSON handled";
