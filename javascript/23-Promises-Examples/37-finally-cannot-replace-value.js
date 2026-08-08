Promise.resolve("original")
  .finally(() => "ignored-return")
  .then((v) => {
    document.getElementById("out").textContent = "value still=" + v;
  });
