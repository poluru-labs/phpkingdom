function statusMessage(code) {
  const map = {
    200: "OK",
    201: "Created",
    204: "No Content",
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    500: "Server Error"
  };
  return map[code] || "Unknown";
}
document.getElementById("out").textContent =
  [200, 201, 404, 500].map((c) => c + "=" + statusMessage(c)).join("\n");
