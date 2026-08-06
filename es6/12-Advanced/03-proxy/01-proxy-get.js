const target = { a: 1 };
const proxy = new Proxy(target, {
  get(obj, prop) {
    return prop in obj ? obj[prop] : 0;
  },
});
document.getElementById("out").textContent = proxy.a + "," + proxy.missing;
