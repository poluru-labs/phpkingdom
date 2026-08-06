async function f() { return 1; }
f().then((v) => {
  document.getElementById("out").textContent = "typeof thenable ok, v=" + v;
});
