let cleaned = false;
Promise.reject(new Error("fail"))
  .finally(() => { cleaned = true; })
  .catch((err) => {
    document.getElementById("out").textContent =
      err.message + " / cleaned=" + cleaned;
  });
