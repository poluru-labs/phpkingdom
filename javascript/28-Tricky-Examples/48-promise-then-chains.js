Promise.resolve(1)
  .then((n) => n + 1)
  .then((n) => { throw new Error("boom at " + n); })
  .then(() => "skipped")
  .catch((e) => {
    document.getElementById("out").textContent = "caught: " + e.message;
  });
