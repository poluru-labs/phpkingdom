function validateConfig(config, required) {
  const missing = required.filter((k) => !(k in config));
  return { ok: missing.length === 0, missing };
}
document.getElementById("out").textContent = JSON.stringify(validateConfig({ host: "localhost", port: 3000 }, ["host", "port", "db"]));
