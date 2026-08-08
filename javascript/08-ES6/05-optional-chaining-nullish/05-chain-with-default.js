const settings = { theme: null };
const theme = settings.theme ?? "light";
const locale = settings.locale?.code ?? "en";
document.getElementById("out").textContent = theme + " / " + locale;
