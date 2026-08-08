async function apiWithAuth(token) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token
  };
  // fetch("/api/me", { headers })
  return { headers, data: { user: "Ada", authed: true } };
}
apiWithAuth("demo-token-123").then((result) => {
  document.getElementById("out").textContent = JSON.stringify(result, null, 2);
});
