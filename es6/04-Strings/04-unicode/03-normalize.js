const a = "\u00E9";
const b = "e\u0301";
document.getElementById("out").textContent =
  "raw equal=" + (a === b) +
  "\nNFC equal=" + (a.normalize("NFC") === b.normalize("NFC"));
