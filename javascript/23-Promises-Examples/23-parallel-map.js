const ids = [1, 2, 3];
Promise.all(ids.map((id) =>
  Promise.resolve({ id, title: "Item " + id })
)).then((items) => {
  document.getElementById("out").textContent = JSON.stringify(items);
});
