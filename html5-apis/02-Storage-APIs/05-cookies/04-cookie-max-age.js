document.getElementById("go").onclick = () => {
  document.cookie = "pk_tmp=1; Max-Age=60; Path=/; SameSite=Lax";
  document.getElementById("out").textContent = document.cookie || "(empty — HttpOnly cookies hidden)";
};
