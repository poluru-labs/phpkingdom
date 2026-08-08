function basicAuthHeader(username, password) {
  const token = btoa(username + ":" + password);
  return "Basic " + token;
}
document.getElementById("out").textContent = basicAuthHeader("ada", "s3cret");
