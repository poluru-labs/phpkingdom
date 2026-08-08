function validateUser(payload) {
  const errors = [];
  if (!payload.email || !payload.email.includes("@")) errors.push("email");
  if (!payload.name || payload.name.length < 2) errors.push("name");
  return { ok: errors.length === 0, errors };
}
document.getElementById("out").textContent = JSON.stringify({
  bad: validateUser({ name: "A", email: "x" }),
  good: validateUser({ name: "Ada", email: "ada@example.com" })
}, null, 2);
