function legacyFail(cb) {
  setTimeout(() => cb(new Error("disk full")), 100);
}
function readAsync() {
  return new Promise((resolve, reject) => {
    legacyFail((err, data) => err ? reject(err) : resolve(data));
  });
}
readAsync().catch((err) => {
  document.getElementById("out").textContent = err.message;
});
