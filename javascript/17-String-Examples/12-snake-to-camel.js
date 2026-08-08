function snakeToCamel(s) {
  return s.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}
document.getElementById("out").textContent = snakeToCamel("php_kingdom_site");
