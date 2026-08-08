const out = document.getElementById("out");
function toUserMessage(err) {
  if (err.message.includes("network")) return "Check your connection and try again.";
  if (err.message.includes("401")) return "Please sign in again.";
  return "Something went wrong. Please try later.";
}
try {
  throw new Error("network ECONNRESET");
} catch (e) {
  out.textContent = toUserMessage(e);
}
