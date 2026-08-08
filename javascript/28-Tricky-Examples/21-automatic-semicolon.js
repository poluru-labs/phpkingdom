function bad() {
  return
  {
    ok: true
  };
}
function good() {
  return {
    ok: true
  };
}
document.getElementById("out").textContent =
  "bad() => " + JSON.stringify(bad()) + "\n" +
  "good() => " + JSON.stringify(good());
