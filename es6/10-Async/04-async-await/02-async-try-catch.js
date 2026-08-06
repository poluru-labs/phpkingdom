async function boom() {
  try {
    await Promise.reject(new Error("nope"));
  } catch (e) {
    document.getElementById("out").textContent = e.message;
  }
}
boom();
