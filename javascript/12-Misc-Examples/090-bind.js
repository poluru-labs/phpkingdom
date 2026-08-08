function f(){return this.x;} document.getElementById("out").textContent=f.bind({x:9})();
