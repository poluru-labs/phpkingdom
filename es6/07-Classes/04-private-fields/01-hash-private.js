class Wallet {
  #balance = 0;
  deposit(n) { this.#balance += n; }
  getBalance() { return this.#balance; }
}
const w = new Wallet();
w.deposit(50);
document.getElementById("out").textContent = "balance=" + w.getBalance();
