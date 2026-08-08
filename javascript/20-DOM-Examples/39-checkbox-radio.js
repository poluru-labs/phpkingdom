document.getElementById("btn").onclick = () => {
  const agree = document.getElementById("agree").checked;
  const plan = document.querySelector('input[name="plan"]:checked').value;
  document.getElementById("out").textContent = "agree=" + agree + " plan=" + plan;
};
