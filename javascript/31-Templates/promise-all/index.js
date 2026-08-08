document.getElementById("go").onclick = () => {
  const a = Promise.resolve(1);
  const b = new Promise((r) => setTimeout(() => r(2), 30));
  Promise.all([a, b]).then((vals) => {
    document.getElementById("out").textContent = vals.join("+") + "=" + vals.reduce((x, y) => x + y, 0);
  });
};
