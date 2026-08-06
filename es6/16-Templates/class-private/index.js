class Box { #n = 0; inc() { this.#n++; return this.#n; } } document.getElementById("out").textContent = String(new Box().inc());
