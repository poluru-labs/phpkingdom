const log = "User pay@mail.com paid with 4111-2222-3333-4444";
let redacted = log.replace(/[\w.+-]+@[\w-]+\.[\w.-]+/g, "[EMAIL]");
redacted = redacted.replace(/\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b/g, "[CARD]");
document.getElementById("out").textContent =
  "before: " + log + "\n" +
  "after:  " + redacted;
