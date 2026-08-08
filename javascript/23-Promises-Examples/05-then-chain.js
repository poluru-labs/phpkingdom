Promise.resolve(2)
  .then((n) => n * 3)
  .then((n) => n + 4)
  .then((n) => {
    document.getElementById("out").textContent = "result=" + n;
  });
