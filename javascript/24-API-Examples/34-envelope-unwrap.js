async function unwrap(resJson) {
  if (resJson.error) throw new Error(resJson.error);
  return resJson.data;
}
unwrap({ data: { id: 1, site: "phpkingdom.com" }, meta: { page: 1 } })
  .then((data) => {
    document.getElementById("out").textContent = JSON.stringify(data);
  });
