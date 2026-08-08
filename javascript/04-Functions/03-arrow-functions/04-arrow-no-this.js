const obj = {
  n: 2,
  twice() { return (() => this.n * 2)(); }
};
document.getElementById("out").textContent = String(obj.twice());
