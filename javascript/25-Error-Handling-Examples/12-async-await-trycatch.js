const out = document.getElementById("out");
async function fetchUser() {
  throw new Error("network down");
}
(async () => {
  try {
    await fetchUser();
    out.textContent = "success";
  } catch (e) {
    out.textContent = "async catch: " + e.message;
  }
})();
