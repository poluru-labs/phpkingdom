const user = { a: 1, b: 2, c: 3 };
document.getElementById("out").textContent =
  "keys=" + Object.keys(user) +
  "\nvalues=" + Object.values(user) +
  "\nentries=" + JSON.stringify(Object.entries(user));
