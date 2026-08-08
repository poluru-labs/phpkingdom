const text = "Contact alice@corp.io or bob+dev@example.org for help.";
const emails = text.match(/[\w.+-]+@[\w-]+\.[\w.-]+/g);
document.getElementById("out").textContent =
  "found: " + JSON.stringify(emails);
