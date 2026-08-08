class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.name = "HttpError";
    this.status = status;
  }
}
Promise.reject(new HttpError(404, "Not Found"))
  .catch((err) => {
    if (err.name === "HttpError") {
      document.getElementById("out").textContent = err.status + " " + err.message;
    } else {
      document.getElementById("out").textContent = String(err);
    }
  });
