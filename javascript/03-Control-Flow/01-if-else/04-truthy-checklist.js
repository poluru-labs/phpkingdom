const vals = [0, "", "0", [], {}, null];
document.getElementById("out").textContent = vals.map(v => JSON.stringify(v) + " => " + !!v).join("\n");
