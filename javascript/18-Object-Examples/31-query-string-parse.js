function parseQuery(qs) {
  const clean = qs.replace(/^\?/, "");
  if (!clean) return {};
  return Object.fromEntries(
    clean.split("&").map((pair) => {
      const [k, v = ""] = pair.split("=");
      return [decodeURIComponent(k), decodeURIComponent(v)];
    })
  );
}
document.getElementById("out").textContent = JSON.stringify(parseQuery("?site=phpkingdom.com&lang=js"));
