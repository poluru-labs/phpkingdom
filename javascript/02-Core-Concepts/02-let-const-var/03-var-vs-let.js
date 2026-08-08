var msg = "";
if (true) {
  var a = "var leaks";
  let b = "let stays";
  msg += a + "\n";
}
msg += "a outside=" + a + "\n";
try { msg += b; } catch (e) { msg += "b outside throws"; }
document.getElementById("out").textContent = msg;
