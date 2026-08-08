const out = document.getElementById("out");
function createUser(data) {
  if (!data) throw new Error("data required");
  if (!data.email) throw new Error("email required");
  if (!data.email.includes("@")) throw new Error("email invalid");
  return { id: 1, email: data.email };
}
try {
  createUser({ email: "bad" });
} catch (e) {
  out.textContent = e.message;
}
