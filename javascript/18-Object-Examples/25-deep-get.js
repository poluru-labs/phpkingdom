function deepGet(obj, path, fallback) {
  const val = path.split(".").reduce(
    (acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined),
    obj
  );
  return val === undefined ? fallback : val;
}
const data = { user: { profile: { city: "Austin" } } };
document.getElementById("out").textContent =
  deepGet(data, "user.profile.city") + " / " + deepGet(data, "user.profile.zip", "N/A");
