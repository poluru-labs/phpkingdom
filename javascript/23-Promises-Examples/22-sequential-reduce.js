const tasks = [1, 2, 3, 4];
tasks.reduce((chain, n) => {
  return chain.then((acc) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(acc.concat(n * 10)), 50);
    });
  });
}, Promise.resolve([])).then((result) => {
  document.getElementById("out").textContent = result.join(", ");
});
