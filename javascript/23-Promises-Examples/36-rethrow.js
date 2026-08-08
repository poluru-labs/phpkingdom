Promise.reject(new Error("db down"))
  .catch((err) => {
    if (err.message.includes("db")) throw err;
    return "ignored";
  })
  .catch((err) => {
    document.getElementById("out").textContent = "outer: " + err.message;
  });
