function toCamelKey(key) {
  return key.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}
function normalize(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [toCamelKey(k), v])
  );
}
const apiUser = { first_name: "Ada", last_name: "Lovelace", is_active: true };
document.getElementById("out").textContent = JSON.stringify(normalize(apiUser));
