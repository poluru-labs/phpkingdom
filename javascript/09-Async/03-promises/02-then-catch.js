Promise.reject(new Error("oops"))
  .then(function () { return "ok"; })
  .catch(function (err) {
    document.getElementById("out").textContent = err.message;
  });
