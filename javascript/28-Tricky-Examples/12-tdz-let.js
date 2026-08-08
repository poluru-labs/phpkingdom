try {
  // eslint-disable-next-line no-use-before-define
  document.getElementById("out").textContent = value;
  let value = 1;
} catch (e) {
  document.getElementById("out").textContent = e.name + ": " + e.message;
}
