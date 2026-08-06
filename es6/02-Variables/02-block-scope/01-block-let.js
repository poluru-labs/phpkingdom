let outer = "out";
{
  let inner = "in";
  outer = outer + "+" + inner;
}
document.getElementById("out").textContent = outer;
