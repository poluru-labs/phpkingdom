const url = new URL("https://api.phpkingdom.com/search");
url.searchParams.set("q", "javascript");
url.searchParams.set("page", "1");
url.searchParams.set("author", "Subrahmanyam Poluru");
document.getElementById("out").textContent = url.toString();
