const d = new Date(2024, 0, 15, 10, 0, 0);
d.setFullYear(2025);
d.setMonth(5); // June
d.setDate(1);
d.setHours(18, 30, 0, 0);
document.getElementById("out").textContent = "After setters: " + d.toString();
