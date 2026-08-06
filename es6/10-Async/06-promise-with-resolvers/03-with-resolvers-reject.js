const { promise, reject } = Promise.withResolvers
  ? Promise.withResolvers()
  : (() => { let resolve, reject; const promise = new Promise((res, rej) => { resolve = res; reject = rej; }); return { promise, resolve, reject }; })();
promise.catch(e => {
  document.getElementById("out").textContent = "caught: " + e.message;
});
reject(new Error("nope"));
