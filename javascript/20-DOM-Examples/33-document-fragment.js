let base = 0;
document.getElementById("btn").onclick = () => {
  const frag = document.createDocumentFragment();
  for (let i = 1; i <= 5; i += 1) {
    const li = document.createElement("li");
    li.textContent = "Row " + (base + i);
    frag.appendChild(li);
  }
  base += 5;
  document.getElementById("list").appendChild(frag);
};
