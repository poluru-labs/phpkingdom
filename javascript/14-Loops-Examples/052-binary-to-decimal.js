const bin = "1011";
let dec = 0;
for (const bit of bin) dec = dec * 2 + Number(bit);
document.getElementById("out").textContent = bin + "₂ = " + dec + "₁₀";
