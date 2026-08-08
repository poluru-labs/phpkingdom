const wrap = document.createElement("div");
wrap.className = "card";
wrap.innerHTML = '<button class="btn">Go</button>';
document.body.appendChild(wrap);
const btn = wrap.querySelector(".btn");
document.getElementById("out").textContent =
  "matches=" + btn.matches(".btn") + " closest.card=" + !!btn.closest(".card");
