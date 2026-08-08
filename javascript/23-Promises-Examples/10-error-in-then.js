Promise.resolve(1)
  .then(() => {
    throw new Error("boom");
  })
  .catch((err) => {
    document.getElementById("out").textContent = "caught: " + err.message;
  });
