function camelToSnake(s) {
  return s.replace(/[A-Z]/g, (m) => "_" + m.toLowerCase());
}
document.getElementById("out").textContent = camelToSnake("phpKingdomSite");
