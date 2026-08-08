Promise.reject(new Error("x"))
  .then(null, (err) => "recovered:" + err.message)
  .then((v) => {
    document.getElementById("out").textContent = v;
  });
