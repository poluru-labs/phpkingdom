const notes = document.querySelectorAll(".note");
const texts = [...notes].map((n) => n.textContent);
document.getElementById("out").textContent = "count=" + notes.length + " → " + texts.join(", ");
