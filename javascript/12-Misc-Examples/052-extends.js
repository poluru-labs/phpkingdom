class A{x(){return 1;}} class B extends A{y(){return this.x()+1;}} document.getElementById("out").textContent=String(new B().y());
