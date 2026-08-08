const cart = {
  items: [],
  addItem(name, price, qty = 1) { this.items.push({ name, price, qty }); },
  total() { return this.items.reduce((sum, i) => sum + i.price * i.qty, 0); }
};
cart.addItem("HTML Book", 20, 2);
cart.addItem("CSS Guide", 15);
document.getElementById("out").textContent = JSON.stringify(cart.items) + "\ntotal=" + cart.total();
