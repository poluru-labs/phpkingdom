const a={x:{y:1}};const b=structuredClone(a);b.x.y=2;document.getElementById('out').textContent=a.x.y+','+b.x.y;
