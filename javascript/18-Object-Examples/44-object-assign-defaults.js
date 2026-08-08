const base = { api: "v1", retries: 3 };
const config = Object.assign({}, base, { retries: 5, timeout: 1000 });
document.getElementById("out").textContent = JSON.stringify(config);
