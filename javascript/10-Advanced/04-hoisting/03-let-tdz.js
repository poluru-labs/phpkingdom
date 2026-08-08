try {
  // eslint-disable-next-line no-use-before-define
  console.log(value);
  let value = 1;
} catch (e) {
  document.getElementById("out").textContent = "TDZ: " + e.name;
}
