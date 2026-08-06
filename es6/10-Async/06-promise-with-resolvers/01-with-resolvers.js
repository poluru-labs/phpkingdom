const { promise, resolve } = Promise.withResolvers
  ? Promise.withResolvers()
  : (() => { let resolve, reject; const promise = new Promise((res, rej) => { resolve = res; reject = rej; }); return { promise, resolve, reject }; })();
promise.then(v => {
  document.getElementById("out").textContent = "resolved: " + v;
});
resolve("ok");
