async function fetchPage(cursor = null) {
  const pages = {
    null: { items: ["a", "b"], nextCursor: "c1" },
    c1: { items: ["c", "d"], nextCursor: null }
  };
  return pages[cursor];
}
async function loadAll() {
  let cursor = null, all = [];
  do {
    const page = await fetchPage(cursor);
    all = all.concat(page.items);
    cursor = page.nextCursor;
  } while (cursor);
  return all;
}
loadAll().then((items) => {
  document.getElementById("out").textContent = items.join(", ");
});
