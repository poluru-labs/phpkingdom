const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;
document.getElementById("out").textContent =
  dog.barks + " / eats=" + dog.eats;
