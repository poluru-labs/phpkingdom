function maybeFail(ok, cb) {
  setTimeout(function () {
    if (!ok) cb(new Error("failed"));
    else cb(null, "success");
  }, 200);
}
maybeFail(true, function (err, value) {
  document.getElementById("out").textContent = err ? err.message : value;
});
