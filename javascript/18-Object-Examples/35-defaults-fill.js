function withDefaults(obj, defaults) { return { ...defaults, ...obj }; }
document.getElementById("out").textContent = JSON.stringify(withDefaults({ theme: "dark" }, { theme: "light", lang: "en", page: 1 }));
