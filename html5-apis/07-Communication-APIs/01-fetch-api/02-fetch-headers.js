(async () => {
  try {
    const res = await fetch("https://httpbin.org/status/200");
    document.getElementById("out").textContent =
      "ok=" + res.ok + " status=" + res.status;
  } catch (e) {
    document.getElementById("out").textContent = e.message;
  }
})();
