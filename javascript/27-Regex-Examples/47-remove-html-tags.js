const html = "<p>Hello <strong>world</strong>!</p>";
const plain = html.replace(/<[^>]+>/g, "");
document.getElementById("out").textContent =
  "html:  " + html + "\n" +
  "plain: " + plain;
