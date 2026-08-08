function pageParams(page, limit = 10) {
  return { page, limit, offset: (page - 1) * limit };
}
document.getElementById("out").textContent =
  JSON.stringify([pageParams(1), pageParams(2), pageParams(3)], null, 2);
