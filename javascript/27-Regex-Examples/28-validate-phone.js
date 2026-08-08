const phones = ["(555) 123-4567", "555-123-4567", "5551234567", "12-34"];
const re = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
const results = phones.map(p => p + " => " + re.test(p));
document.getElementById("out").textContent = results.join("\n");
