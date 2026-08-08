let msg = "outside";
{
  let msg = "inside";
}
document.getElementById("out").textContent = msg;
