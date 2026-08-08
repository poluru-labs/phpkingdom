const out = document.getElementById("out");
Promise.resolve()
  .then(() => { throw new Error("step failed"); })
  .then(() => "skipped")
  .catch(e => {
    out.textContent = "chain catch: " + e.message;
  });
