function unflatten(obj) {
  const out = {};
  for (const [path, value] of Object.entries(obj)) {
    const keys = path.split(".");
    let cur = out;
    keys.slice(0, -1).forEach((k) => {
      if (!cur[k]) cur[k] = {};
      cur = cur[k];
    });
    cur[keys[keys.length - 1]] = value;
  }
  return out;
}
document.getElementById("out").textContent = JSON.stringify(unflatten({ a: 1, "b.c": 2, "b.d.e": 3 }), null, 2);
