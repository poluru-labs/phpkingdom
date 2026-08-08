function deepSet(obj, path, value) {
  const keys = path.split(".");
  let cur = obj;
  keys.slice(0, -1).forEach((k) => {
    if (!cur[k] || typeof cur[k] !== "object") cur[k] = {};
    cur = cur[k];
  });
  cur[keys[keys.length - 1]] = value;
  return obj;
}
const data = {};
deepSet(data, "user.profile.city", "Austin");
document.getElementById("out").textContent = JSON.stringify(data);
