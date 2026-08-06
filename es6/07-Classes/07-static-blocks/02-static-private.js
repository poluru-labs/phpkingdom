class Token {
  static #secret;
  static {
    this.#secret = "abc";
  }
  static peek() { return this.#secret; }
}
document.getElementById("out").textContent = Token.peek();
