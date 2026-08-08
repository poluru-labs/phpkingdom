class Site { constructor(name) { this.name = name; } }
try {
  // @ts-ignore
  Site("phpkingdom");
} catch (e) {
  document.getElementById("out").textContent = e.name + ": " + e.message;
}
document.getElementById("out").textContent += "\nwith new => " + new Site("phpkingdom").name;
