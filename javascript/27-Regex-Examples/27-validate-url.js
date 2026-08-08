const urls = ["https://example.com", "ftp://x.com", "https://ex.co/path?q=1"];
const re = /^https?:\/\/[\w.-]+(?:\.[\w.-]+)*(?:[:\d]+)?(?:\/\S*)?$/;
const results = urls.map(u => u + " => " + re.test(u));
document.getElementById("out").textContent = results.join("\n");
