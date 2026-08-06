try {
  document.getElementById("out").textContent = String(1n + 1);
} catch (e) {
  document.getElementById("out").textContent = e.name + ": mix Number and BigInt";
}
