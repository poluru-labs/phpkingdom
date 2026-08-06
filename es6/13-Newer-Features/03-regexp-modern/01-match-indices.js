const re = /(a+)(b+)/d;
const m = re.exec("xxaaabb");
document.getElementById("out").textContent =
  m ? JSON.stringify(m.indices) : "no match";
