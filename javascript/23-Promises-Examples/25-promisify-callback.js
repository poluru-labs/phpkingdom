function legacyLoad(cb) {
  setTimeout(() => cb(null, "legacy-data"), 150);
}
function loadAsync() {
  return new Promise((resolve, reject) => {
    legacyLoad((err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}
loadAsync().then((data) => {
  document.getElementById("out").textContent = data;
});
