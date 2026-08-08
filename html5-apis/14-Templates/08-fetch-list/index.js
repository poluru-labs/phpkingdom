document.getElementById("go").onclick = async () => {
  try {
    const res = await fetch("https://httpbin.org/json");
    const data = await res.json();
    const slides = (data.slideshow && data.slideshow.slides) || [];
    document.getElementById("list").innerHTML = slides.map(s => "<li>" + (s.title || "slide") + "</li>").join("") || "<li>(no slides)</li>";
    document.getElementById("out").textContent = "status=" + res.status;
  } catch (e) {
    document.getElementById("out").textContent = e.message;
  }
};
