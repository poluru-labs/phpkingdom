function makeCounter(){ let c=0; return () => ++c; }
const next = makeCounter();
document.getElementById("out").textContent = next() + ", " + next();
