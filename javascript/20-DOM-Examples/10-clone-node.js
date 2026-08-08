document.getElementById("btn").onclick = () => {
  const copy = document.getElementById("card").cloneNode(true);
  document.getElementById("copies").appendChild(copy);
};
