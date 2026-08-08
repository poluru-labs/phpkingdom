const out = document.getElementById("out");
const lines = [];
try {
  throw new Error("Something went wrong");
} catch (e) {
  lines.push("caught: " + e.message);
}
out.textContent = lines.join("\n");
