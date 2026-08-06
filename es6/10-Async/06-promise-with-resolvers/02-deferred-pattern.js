function deferred() {
  if (Promise.withResolvers) return Promise.withResolvers();
  let resolve, reject;
  const promise = new Promise((res, rej) => { resolve = res; reject = rej; });
  return { promise, resolve, reject };
}
const d = deferred();
d.promise.then(v => { document.getElementById("out").textContent = v; });
setTimeout(() => d.resolve("later"), 10);
