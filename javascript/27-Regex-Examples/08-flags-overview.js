const re = /hello/gim;
document.getElementById("out").textContent =
  "source: " + re.source + "\n" +
  "flags:  " + re.flags + "\n" +
  "global: " + re.global + "\n" +
  "ignoreCase: " + re.ignoreCase + "\n" +
  "multiline: " + re.multiline;
