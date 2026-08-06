function withLog(fn, value) {
  const result = fn(value);
  return "in=" + value + " out=" + result;
}
document.getElementById("out").textContent = withLog((x) => x.toUpperCase(), "es6");
