const u=URL.createObjectURL(new Blob(["a"]));document.getElementById("out").textContent=u.slice(0,32)+"…";URL.revokeObjectURL(u);
