const ok = new Promise((resolve) => setTimeout(() => resolve("ok"), 80));
const bad = new Promise((_, reject) => setTimeout(() => reject(new Error("late fail")), 120));
Promise.allSettled([ok, bad]).then((results) => {
  document.getElementById("out").textContent = results.map((r) =>
    r.status === "fulfilled" ? r.value : r.reason.message
  ).join(" | ");
});
