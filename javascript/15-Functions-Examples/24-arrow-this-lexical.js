const obj = {
  label: "outer",
  regular() {
    const inner = () => "arrow this.label = " + this.label;
    return inner();
  },
};
document.getElementById("out").textContent = obj.regular();
