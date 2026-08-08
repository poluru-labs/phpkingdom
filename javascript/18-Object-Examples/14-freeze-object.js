const config = Object.freeze({ mode: "prod" });
try { config.mode = "dev"; } catch (e) {}
document.getElementById("out").textContent = config.mode + " / frozen=" + Object.isFrozen(config);
