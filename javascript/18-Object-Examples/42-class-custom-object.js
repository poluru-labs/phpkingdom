class BankAccount {
  constructor(owner, balance = 0) { this.owner = owner; this.balance = balance; }
  deposit(amount) { this.balance += amount; }
  withdraw(amount) {
    if (amount > this.balance) throw new Error("Insufficient funds");
    this.balance -= amount;
  }
}
const acc = new BankAccount("Ada", 100);
acc.deposit(40);
acc.withdraw(25);
document.getElementById("out").textContent = acc.owner + " balance=" + acc.balance;
