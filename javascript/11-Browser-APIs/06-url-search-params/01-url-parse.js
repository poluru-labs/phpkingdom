const u = new URL("https://phpkingdom.com/tutorials/javascript?x=1#top");
document.getElementById("out").textContent = [u.origin, u.pathname, u.search, u.hash].join("\n");
