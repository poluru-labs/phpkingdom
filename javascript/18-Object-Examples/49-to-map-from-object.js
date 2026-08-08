const obj = { html: 1, css: 2, js: 3 };
const map = new Map(Object.entries(obj));
const back = Object.fromEntries(map);
document.getElementById("out").textContent = "map.get(js)=" + map.get("js") + "\n" + JSON.stringify(back);
