new IntersectionObserver(es=>document.getElementById("out").textContent=es[0].isIntersecting).observe(document.getElementById("t"));
