const text = "Order #4821 shipped on 2026-07-19";
const re = /#(\d+)/;
const match = re.exec(text);
document.getElementById("out").textContent =
  "match[0]: " + match[0] + "\n" +
  "match[1]: " + match[1] + "\n" +
  "index: " + match.index;
