const obj = {
  name: "phpkingdom",
  regular: function () { return this.name; },
  arrow: () => this && this.name
};
document.getElementById("out").textContent =
  "regular => " + obj.regular() + "\n" +
  "arrow on object => " + String(obj.arrow());
