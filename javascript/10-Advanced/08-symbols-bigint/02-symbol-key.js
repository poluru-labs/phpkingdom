const id = Symbol("id");
const user = { name: "Ada", [id]: 7 };
document.getElementById("out").textContent =
  "keys=" + Object.keys(user).join(",") + "\nownSymbols=" + Object.getOwnPropertySymbols(user).length;
