const out = document.getElementById("out");
const STATUS = {
  400: "Bad request — check your input.",
  401: "Unauthorized — sign in again.",
  403: "Forbidden — you lack permission.",
  404: "Not found — resource missing.",
  500: "Server error — try again later.",
};
function messageFor(status) {
  return STATUS[status] || "Unexpected error (" + status + ")";
}
out.textContent = [404, 401].map(s => s + ": " + messageFor(s)).join("\n");
