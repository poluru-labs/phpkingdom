const fruit = "apple";
let type;
switch (fruit) {
  case "apple":
  case "pear":
    type = "pome";
    break;
  default:
    type = "other";
}
document.getElementById("out").textContent = type;
