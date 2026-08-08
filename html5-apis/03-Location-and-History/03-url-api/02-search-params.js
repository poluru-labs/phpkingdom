const p = new URLSearchParams("a=1&b=hello");
p.set("c", "3");
document.getElementById("out").textContent =
  "b=" + p.get("b") + "\ntoString=" + p.toString();
