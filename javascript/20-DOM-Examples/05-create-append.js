let n = 0;
document.getElementById("btn").onclick = () => {
  n += 1;
  const li = document.createElement("li");
  li.textContent = "Item " + n;
  document.getElementById("list").appendChild(li);
};
