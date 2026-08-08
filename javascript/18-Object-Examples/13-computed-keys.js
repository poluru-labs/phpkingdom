const key = "score";
const exam = { [key]: 95, ["level" + 1]: "A" };
document.getElementById("out").textContent = JSON.stringify(exam);
