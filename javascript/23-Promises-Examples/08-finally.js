let status = "pending";
Promise.resolve("ok")
  .finally(() => { status = "settled"; })
  .then((v) => {
    document.getElementById("out").textContent = v + " / " + status;
  });
