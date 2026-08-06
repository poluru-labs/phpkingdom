class C {
  #double(n) { return n * 2; }
  run(n) { return this.#double(n); }
}
document.getElementById("out").textContent = new C().run(7);
