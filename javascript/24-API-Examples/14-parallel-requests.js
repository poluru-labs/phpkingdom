const get = (name, ms) => new Promise((resolve) =>
  setTimeout(() => resolve({ name, ms }), ms)
);
Promise.all([get("users", 120), get("posts", 80), get("comments", 40)])
  .then((results) => {
    document.getElementById("out").textContent = JSON.stringify(results, null, 2);
  });
