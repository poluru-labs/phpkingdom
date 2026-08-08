function userUrl(id) {
  return `/api/users/${encodeURIComponent(id)}`;
}
document.getElementById("out").textContent =
  userUrl(42) + "\n" + userUrl("ada lovelace");
