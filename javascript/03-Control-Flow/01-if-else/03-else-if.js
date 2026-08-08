const score = 82;
let grade;
if (score >= 90) grade = "A";
else if (score >= 80) grade = "B";
else grade = "C";
document.getElementById("out").textContent = grade;
