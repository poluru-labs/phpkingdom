let log = "";
try {
  log += "try ";
  throw new Error("x");
} catch (e) {
  log += "catch ";
} finally {
  log += "finally";
}
document.getElementById("out").textContent = log;
