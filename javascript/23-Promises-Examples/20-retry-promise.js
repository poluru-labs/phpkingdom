function attempt(fn, retries) {
  return fn().catch((err) => {
    if (retries <= 0) throw err;
    return attempt(fn, retries - 1);
  });
}
let tries = 0;
attempt(() => {
  tries++;
  return tries < 3
    ? Promise.reject(new Error("fail #" + tries))
    : Promise.resolve("success on try " + tries);
}, 5).then((v) => {
  document.getElementById("out").textContent = v;
});
