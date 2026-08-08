const x = 1;
{
  const x = 2;
  document.getElementById("out").textContent = "inner=" + x;
}
document.getElementById("out").textContent += "\nouter still " + x;
