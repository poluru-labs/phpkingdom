const names = ["user_name", "order_id", "is_active"];
const toCamel = s => s.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
const results = names.map(n => n + " => " + toCamel(n));
document.getElementById("out").textContent = results.join("\n");
