const pr = new Intl.PluralRules("en");
document.getElementById("out").textContent = [1, 2, 5].map(n => n + " → " + pr.select(n)).join("\n");
