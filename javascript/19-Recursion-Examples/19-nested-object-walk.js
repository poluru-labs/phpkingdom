const data = { user: { name: "Sam", address: { city: "Austin", zip: 78701 } }, active: true };
function walk(obj, prefix = "", paths = []) {
  if (obj !== null && typeof obj === "object" && !Array.isArray(obj)) {
    for (const key of Object.keys(obj)) {
      const next = prefix ? prefix + "." + key : key;
      paths.push(next);
      walk(obj[key], next, paths);
    }
  }
  return paths;
}
document.getElementById("out").textContent = walk(data).join("\n");
