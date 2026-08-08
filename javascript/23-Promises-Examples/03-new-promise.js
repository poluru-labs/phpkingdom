const p = new Promise((resolve, reject) => {
  const ok = true;
  if (ok) resolve("created with new Promise");
  else reject(new Error("nope"));
});
p.then((v) => {
  document.getElementById("out").textContent = v;
});
