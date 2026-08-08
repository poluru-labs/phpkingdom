Promise.reject(new Error("something failed"))
  .then(() => "skipped")
  .catch((err) => {
    document.getElementById("out").textContent = "caught: " + err.message;
  });
