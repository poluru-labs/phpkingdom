const user = { a: 1, b: 2 };
document.getElementById("out").textContent =
  Object.keys(user) + " / " + Object.values(user);
