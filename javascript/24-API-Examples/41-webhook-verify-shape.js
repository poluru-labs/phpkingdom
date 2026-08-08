function verifyWebhook(payload, signature, secret) {
  // In Node: crypto.createHmac("sha256", secret).update(payload).digest("hex")
  // Browser demo uses a simplified equality check:
  const expected = "sha256=" + btoa(secret + ":" + payload).slice(0, 16);
  return signature === expected;
}
const payload = '{"event":"order.created"}';
const secret = "whsec_demo";
const signature = "sha256=" + btoa(secret + ":" + payload).slice(0, 16);
document.getElementById("out").textContent = String(verifyWebhook(payload, signature, secret));
