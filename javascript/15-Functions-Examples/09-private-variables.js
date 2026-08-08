function createAccount(initial) {
  let balance = initial;
  return {
    deposit(amount) { balance += amount; },
    getBalance() { return balance; },
  };
}
const acct = createAccount(100);
acct.deposit(50);
document.getElementById("out").textContent = "balance = " + acct.getBalance();
