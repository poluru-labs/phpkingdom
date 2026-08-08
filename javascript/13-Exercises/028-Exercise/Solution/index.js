["One","Two","Three"].forEach((t) => {
  const li = document.createElement("li");
  li.textContent = t;
  document.getElementById("list").append(li);
});
