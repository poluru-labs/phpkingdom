const ok = Promise.resolve({ endpoint: "A", ok: true });
const fail = Promise.reject(new Error("B failed"));
Promise.allSettled([ok, fail]).then((results) => {
  document.getElementById("out").textContent = JSON.stringify(results, null, 2);
});
