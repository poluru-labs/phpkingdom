document.getElementById("field").addEventListener("keydown", (e) => {
  document.getElementById("out").textContent =
    "key=" + e.key + " code=" + e.code + " repeat=" + e.repeat;
});
