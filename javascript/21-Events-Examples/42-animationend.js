const ball = document.getElementById("ball");
ball.addEventListener("animationend", (e) => {
  ball.classList.remove("run");
  document.getElementById("out").textContent = "animationend: " + e.animationName;
});
document.getElementById("btn").onclick = () => {
  ball.classList.remove("run");
  void ball.offsetWidth;
  ball.classList.add("run");
};
