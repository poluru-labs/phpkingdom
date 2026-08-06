const s = "JavaScript";
document.getElementById("out").textContent = [
  "includes(Script)=" + s.includes("Script"),
  "startsWith(Java)=" + s.startsWith("Java"),
  "endsWith(ript)=" + s.endsWith("ript"),
].join("\n");
