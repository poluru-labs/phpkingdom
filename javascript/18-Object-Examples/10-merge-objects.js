const defaults = { theme: "light", lang: "en" };
const user = { theme: "dark" };
document.getElementById("out").textContent = JSON.stringify({ ...defaults, ...user });
