const out = document.getElementById("out");
const tasks = [
  Promise.resolve("A"),
  Promise.reject(new Error("B failed")),
  Promise.resolve("C"),
];
Promise.allSettled(tasks).then(results => {
  const lines = results.map((r, i) =>
    r.status + ": " + (r.status === "fulfilled" ? r.value : r.reason.message)
  );
  out.textContent = lines.join("\n");
});
