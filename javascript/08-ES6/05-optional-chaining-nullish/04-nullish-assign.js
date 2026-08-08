const cfg = { retries: 0 };
cfg.retries ??= 3;
cfg.timeout ??= 1000;
document.getElementById("out").textContent = JSON.stringify(cfg);
