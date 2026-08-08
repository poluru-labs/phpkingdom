const text = "http https ftp";
const withCap = /(https?):\/\/(\w+)/.exec("https://site.com");
const nonCap = /(?:https?):\/\/(\w+)/.exec("https://site.com");
document.getElementById("out").textContent =
  "capturing groups:   " + withCap.length + " items\n" +
  "non-capturing host: " + nonCap[1];
