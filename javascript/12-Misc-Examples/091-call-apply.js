function f(a){return this.n+a;} document.getElementById("out").textContent=f.call({n:1},2);
