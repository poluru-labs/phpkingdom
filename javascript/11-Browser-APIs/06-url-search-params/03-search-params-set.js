const sp = new URLSearchParams("a=1");
sp.set("a", "2");
sp.append("b", "3");
sp.delete("a");
document.getElementById("out").textContent = sp.toString();
