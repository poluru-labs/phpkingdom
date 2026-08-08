const a = [];
a[2] = "x";
document.getElementById("out").textContent = "length=" + a.length + "\nkeys=" + Object.keys(a).join(",");
