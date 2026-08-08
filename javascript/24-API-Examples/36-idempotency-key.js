function createPayment(amount) {
  const key = "pay-" + Date.now();
  const headers = { "Idempotency-Key": key, "Content-Type": "application/json" };
  // fetch("/api/payments", { method: "POST", headers, body: JSON.stringify({ amount }) })
  return { headers, body: { amount } };
}
document.getElementById("out").textContent = JSON.stringify(createPayment(19.99), null, 2);
