function load(cb) {
  setTimeout(() => cb(null, "ok"), 30);
}
load((err, data) => {
  document.getElementById("out").textContent = err ? String(err) : data;
});
