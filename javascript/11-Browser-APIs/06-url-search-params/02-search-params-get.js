const u = new URL("https://example.com/?q=js&q=ts");
document.getElementById("out").textContent = "get=" + u.searchParams.get("q") + "\ngetAll=" + u.searchParams.getAll("q").join(",");
