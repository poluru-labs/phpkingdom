const obj = {
  name: "Team",
  regular: function () { return this.name; },
  arrow: () => "arrow has lexical this"
};
document.getElementById("out").textContent =
  obj.regular() + " / " + obj.arrow();
