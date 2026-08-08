const user = {
  name: "Sam",
  greet() {
    return "Hi, I am " + this.name;
  },
};
document.getElementById("out").textContent = user.greet();
