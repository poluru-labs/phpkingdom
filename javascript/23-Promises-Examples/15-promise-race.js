const slow = new Promise((resolve) => setTimeout(() => resolve("slow"), 300));
const fast = new Promise((resolve) => setTimeout(() => resolve("fast"), 100));
Promise.race([slow, fast]).then((value) => {
  document.getElementById("out").textContent = "winner=" + value;
});
