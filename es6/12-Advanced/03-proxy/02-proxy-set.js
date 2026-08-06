const target = {};
const proxy = new Proxy(target, {
  set(obj, prop, value) {
    if (typeof value !== "number") throw new TypeError("number only");
    obj[prop] = value;
    return true;
  },
});
proxy.n = 5;
document.getElementById("out").textContent = "n=" + proxy.n;
