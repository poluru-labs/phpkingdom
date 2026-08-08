const p = Promise.reject(new Error("unhandled if no catch"));
p.catch((err) => {
  document.getElementById("out").textContent =
    "Always catch rejections: " + err.message;
});
