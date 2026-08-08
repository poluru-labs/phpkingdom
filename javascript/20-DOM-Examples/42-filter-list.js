document.getElementById("q").addEventListener("input", (e) => {
  const q = e.target.value.toLowerCase();
  document.querySelectorAll("#list li").forEach((li) => {
    li.hidden = !li.textContent.toLowerCase().includes(q);
  });
});
