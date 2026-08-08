const c = new AbortController();
document.getElementById("out").textContent = "before=" + c.signal.aborted;
c.abort("user");
document.getElementById("out").textContent += "\nafter=" + c.signal.aborted;
