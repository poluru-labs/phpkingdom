const obj = {
  label: "box",
  traditional: function () { return this.label; },
  arrowWrong: () => this?.label,
};
document.getElementById("out").textContent =
  "traditional=" + obj.traditional();
