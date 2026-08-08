const dates = ["2024-03-01", "2024-01-15", "2024-12-25", "2024-06-10"];
const sorted = [...dates].sort((a, b) => new Date(a) - new Date(b));
document.getElementById("out").textContent = "Sorted:\n" + sorted.join("\n");
