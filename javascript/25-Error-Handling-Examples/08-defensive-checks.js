const out = document.getElementById("out");
function greet(user) {
  if (!user || typeof user.name !== "string") {
    throw new TypeError("user.name must be a string");
  }
  return "Hello, " + user.name;
}
try {
  out.textContent = greet({ age: 30 });
} catch (e) {
  out.textContent = e.name + ": " + e.message;
}
