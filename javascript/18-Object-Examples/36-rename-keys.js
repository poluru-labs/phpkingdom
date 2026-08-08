function renameKeys(obj, map) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [map[k] || k, v]));
}
document.getElementById("out").textContent = JSON.stringify(renameKeys({ first_name: "Ada", age: 36 }, { first_name: "firstName" }));
