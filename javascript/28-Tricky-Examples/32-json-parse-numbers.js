try {
  JSON.stringify({ n: 10n });
} catch (e) {
  document.getElementById("out").textContent =
    "BigInt stringify: " + e.message + "\n" +
    "undefined value omitted: " + JSON.stringify({ a: undefined });
}
