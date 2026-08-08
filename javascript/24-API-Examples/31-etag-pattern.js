let etag = '"v1"';
async function getWithEtag() {
  const incoming = '"v1"'; // server current version
  if (etag && etag === incoming) {
    return { status: 304, body: null, note: "Not Modified" };
  }
  etag = incoming;
  return { status: 200, body: { data: "fresh" }, etag };
}
getWithEtag().then((res) => {
  document.getElementById("out").textContent = JSON.stringify(res, null, 2);
});
// headers: { "If-None-Match": etag }
