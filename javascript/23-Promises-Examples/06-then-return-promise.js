Promise.resolve("user")
  .then((name) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(name + "-loaded"), 200);
    });
  })
  .then((value) => {
    document.getElementById("out").textContent = value;
  });
