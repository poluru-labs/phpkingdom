document.getElementById("out").textContent =
  "[] == false => " + ([] == false) + "\n" +
  "[] == ![] => " + ([] == ![]) + "\n" +
  "!![] => " + (!![]) + "\n" +
  "Boolean([]) => " + Boolean([]);
