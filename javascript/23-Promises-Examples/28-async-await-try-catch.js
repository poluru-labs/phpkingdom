async function main() {
  try {
    await Promise.reject(new Error("await failed"));
  } catch (err) {
    document.getElementById("out").textContent = err.message;
  }
}
main();
