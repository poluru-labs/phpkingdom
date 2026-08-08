const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
document.getElementById("check").onclick = () => {
  const v = document.getElementById("email").value;
  document.getElementById("out").textContent = v + " → " + re.test(v);
};
document.getElementById("check").click();
