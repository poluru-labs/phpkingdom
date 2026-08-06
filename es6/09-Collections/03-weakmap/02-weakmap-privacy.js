const secrets = new WeakMap();
class User {
  constructor(name) { secrets.set(this, { name }); }
  getName() { return secrets.get(this).name; }
}
document.getElementById("out").textContent = new User("Ada").getName();
