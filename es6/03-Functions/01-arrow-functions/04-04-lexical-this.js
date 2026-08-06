const obj = { n: 1, bump() { const f = () => ++this.n; f(); document.getElementById("out").textContent = String(this.n); } }; obj.bump();
