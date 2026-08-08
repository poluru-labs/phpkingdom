function createWallet(start) {
  let balance = start;
  return {
    deposit(n) { balance += n; },
    getBalance() { return balance; }
  };
}
const w = createWallet(10);
w.deposit(5);
document.getElementById("out").textContent = String(w.getBalance());
