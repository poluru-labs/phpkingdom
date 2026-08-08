const student = {
  name: "Ada",
  scores: { html: 90, css: 85, js: 95 },
  average() {
    const vals = Object.values(this.scores);
    return vals.reduce((a, b) => a + b, 0) / vals.length;
  }
};
document.getElementById("out").textContent = student.name + " avg=" + student.average().toFixed(1);
