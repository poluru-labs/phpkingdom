const p = Promise.resolve("phpkingdom.com");
p.then((value) => {
  document.getElementById("out").textContent = "resolved: " + value;
});
