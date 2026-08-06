const cfg = { retries: 0 };
cfg.retries ??= 3;
document.getElementById("out").textContent = "retries=" + cfg.retries;
