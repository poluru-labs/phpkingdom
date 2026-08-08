const out = document.getElementById("out");
Promise.reject(new Error("bad input"))
  .then(
    v => "value: " + v,
    e => "handled: " + e.message
  )
  .then(msg => { out.textContent = msg; });
