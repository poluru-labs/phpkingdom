let obj = { n: 1 };
const ref = new WeakRef(obj);
document.getElementById("out").textContent =
  "deref=" + JSON.stringify(ref.deref());
obj = null; // may be collected later
