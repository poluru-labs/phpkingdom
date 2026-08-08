const settings = { theme: "dark" };
const { theme: mode, lang = "en" } = settings;
document.getElementById("out").textContent = mode + " / " + lang;
