const out = document.getElementById("out");
const users = [{ profile: { city: "Austin" } }, {}];
const cities = users.map(u => u?.profile?.city ?? "unknown");
out.textContent = cities.join(", ");
