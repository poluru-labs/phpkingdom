document.getElementById("go").onclick = () => {
  document.cookie = "pk_tmp=; Max-Age=0; Path=/";
  document.getElementById("out").textContent = "cleared; cookie header now:\n" + document.cookie;
};
