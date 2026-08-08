const fmt = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
document.getElementById("out").textContent = fmt.format(1234.5);
