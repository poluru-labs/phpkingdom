class A{hi(){return'A'}} class B extends A{hi(){return super.hi()+'B'}} document.getElementById('out').textContent=new B().hi();
