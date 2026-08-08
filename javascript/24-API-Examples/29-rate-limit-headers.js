const headers = {
  get(name) {
    const map = {
      "x-ratelimit-limit": "100",
      "x-ratelimit-remaining": "73",
      "retry-after": "30"
    };
    return map[name.toLowerCase()] || null;
  }
};
document.getElementById("out").textContent =
  "limit=" + headers.get("X-RateLimit-Limit") +
  "\nremaining=" + headers.get("X-RateLimit-Remaining") +
  "\nretry-after=" + headers.get("Retry-After");
