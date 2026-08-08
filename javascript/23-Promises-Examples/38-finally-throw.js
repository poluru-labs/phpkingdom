Promise.resolve("ok")
  .finally(() => {
    throw new Error("cleanup failed");
  })
  .then((v) => {
    document.getElementById("out").textContent = v;
  })
  .catch((err) => {
    document.getElementById("out").textContent = err.message;
  });
