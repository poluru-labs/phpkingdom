Promise.reject(new Error("fail"))
  .catch((e) => {
    document.getElementById("out").textContent = "caught: " + e.message;
  });
