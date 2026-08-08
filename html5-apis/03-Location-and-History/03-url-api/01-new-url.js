const u = new URL("https://phpkingdom.com/path?q=1#top");
document.getElementById("out").textContent = [
  "host=" + u.host,
  "pathname=" + u.pathname,
  "search=" + u.search,
  "hash=" + u.hash,
].join("\n");
