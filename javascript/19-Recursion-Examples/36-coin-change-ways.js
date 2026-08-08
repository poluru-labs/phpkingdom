function coinWays(amount, coins, i = 0) {
  if (amount === 0) return 1;
  if (amount < 0 || i >= coins.length) return 0;
  return coinWays(amount - coins[i], coins, i) + coinWays(amount, coins, i + 1);
}
const coins = [1, 2, 5];
document.getElementById("out").textContent = "ways to make 5: " + coinWays(5, coins);
