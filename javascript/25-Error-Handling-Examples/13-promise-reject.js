const out = document.getElementById("out");
Promise.reject(new Error("token expired"))
  .catch(e => {
    out.textContent = "rejected: " + e.message;
  });
