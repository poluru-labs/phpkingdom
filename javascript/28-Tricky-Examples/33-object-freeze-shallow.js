const config = Object.freeze({ nested: { mode: "light" } });
config.nested.mode = "dark";
document.getElementById("out").textContent = config.nested.mode;
