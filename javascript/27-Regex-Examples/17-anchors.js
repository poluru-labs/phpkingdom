const ok = "hello";
const bad = "say hello";
document.getElementById("out").textContent =
  "/^hello$/.test('hello')     => " + /^hello$/.test(ok) + "\n" +
  "/^hello$/.test('say hello') => " + /^hello$/.test(bad);
