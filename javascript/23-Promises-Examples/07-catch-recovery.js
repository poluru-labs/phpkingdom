Promise.reject(new Error("network"))
  .catch((err) => {
    return { fallback: true, reason: err.message };
  })
  .then((data) => {
    document.getElementById("out").textContent = JSON.stringify(data);
  });
