const proto = { inherited: true };
const obj = Object.create(proto);
obj.own = 1;
const all = [];
for (const k in obj) all.push(k);
const owns = [];
for (const k in obj) if (Object.hasOwn(obj, k)) owns.push(k);
document.getElementById("out").textContent =
  "for...in => " + all.join(",") + "\n" +
  "own only => " + owns.join(",");
