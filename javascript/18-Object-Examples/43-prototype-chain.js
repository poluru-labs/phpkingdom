const animal = { eats: true, info() { return "eats=" + this.eats; } };
const dog = Object.create(animal);
dog.barks = true;
document.getElementById("out").textContent = dog.info() + ", barks=" + dog.barks;
