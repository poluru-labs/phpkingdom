let status = "start";
try {
  status = "work";
  throw new Error("x");
} catch {
  status = "caught";
} finally {
  status += "+finally";
}
document.getElementById("out").textContent = status;
