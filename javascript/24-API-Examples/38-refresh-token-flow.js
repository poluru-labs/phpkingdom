let accessToken = "expired";
let refreshToken = "refresh-ok";
async function refresh() {
  if (refreshToken !== "refresh-ok") throw new Error("refresh failed");
  accessToken = "access-new";
  return accessToken;
}
async function apiCall() {
  if (accessToken === "expired") await refresh();
  return { data: "secret", token: accessToken };
}
apiCall().then((res) => {
  document.getElementById("out").textContent = JSON.stringify(res);
});
