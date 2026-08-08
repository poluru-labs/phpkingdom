const text = "Valid_token-123 invalid!";
const tokens = text.match(/[a-zA-Z_][a-zA-Z0-9_]*/g);
document.getElementById("out").textContent =
  "tokens: " + JSON.stringify(tokens);
