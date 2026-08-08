const sp = new URLSearchParams(location.search);
sp.set("demo", "1");
document.getElementById("out").textContent = "next search: ?" + sp.toString();
// history.replaceState(null, "", "?" + sp.toString());
