const compose2 = (f, g) => (x) => f(g(x));
const add1 = (x) => x + 1;
const double = (x) => x * 2;
const add1ThenDouble = compose2(double, add1);
document.getElementById("out").textContent = "add1ThenDouble(5) = " + add1ThenDouble(5);
