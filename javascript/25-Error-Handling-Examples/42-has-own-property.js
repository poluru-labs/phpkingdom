const out = document.getElementById("out");
function getRole(user) {
  if (!Object.prototype.hasOwnProperty.call(user, "role")) {
    throw new Error("missing role property");
  }
  return user.role;
}
try {
  out.textContent = getRole({ name: "Ada" });
} catch (e) {
  out.textContent = e.message;
}
