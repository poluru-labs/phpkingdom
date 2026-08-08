const slow = new Promise(r => setTimeout(() => r("slow"), 80));
const fast = new Promise(r => setTimeout(() => r("fast"), 20));
Promise.race([slow, fast]).then(v => {
  document.getElementById("out").textContent = v;
});
