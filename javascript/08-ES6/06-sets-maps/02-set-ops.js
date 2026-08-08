const s = new Set();
s.add("a"); s.add("b"); s.delete("a");
document.getElementById("out").textContent = "has a=" + s.has("a") + " size=" + s.size;
