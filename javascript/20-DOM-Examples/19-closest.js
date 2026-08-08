document.getElementById("btn").onclick = (e) => {
  const post = e.target.closest(".post");
  document.getElementById("out").textContent = "post id = " + post.dataset.id;
};
