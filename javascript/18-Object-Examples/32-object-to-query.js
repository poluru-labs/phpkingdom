function toQuery(obj) {
  return Object.entries(obj)
    .map(([k, v]) => encodeURIComponent(k) + "=" + encodeURIComponent(v))
    .join("&");
}
document.getElementById("out").textContent = toQuery({ site: "phpkingdom.com", author: "Subrahmanyam Poluru" });
