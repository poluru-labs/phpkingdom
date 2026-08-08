const bag = {
  items: ["x", "y"],
  [Symbol.iterator]() { return this.items[Symbol.iterator](); }
};
document.getElementById("out").textContent = [...bag].join(",");
