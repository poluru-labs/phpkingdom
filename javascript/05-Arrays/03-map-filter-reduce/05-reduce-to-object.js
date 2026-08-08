const people = [{name:"Ada"},{name:"Grace"}];
const by = people.reduce((acc, p) => { acc[p.name] = true; return acc; }, {});
document.getElementById("out").textContent = JSON.stringify(by);
