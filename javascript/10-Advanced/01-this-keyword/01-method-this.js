const user = {
  name: "Ada",
  hello() { return "Hi " + this.name; }
};
document.getElementById("out").textContent = user.hello();
