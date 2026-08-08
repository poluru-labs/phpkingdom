const text = "See https://example.com and http://test.io/page?q=1 today.";
const urls = text.match(/https?:\/\/[^\s]+/g);
document.getElementById("out").textContent =
  "found: " + JSON.stringify(urls);
