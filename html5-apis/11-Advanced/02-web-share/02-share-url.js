document.getElementById("btn").onclick = async () => {
  if (!navigator.share) {
    document.getElementById("out").textContent = "Web Share not supported";
    return;
  }
  try {
    await navigator.share({
      title: "phpkingdom.com",
      text: "HTML5 APIs tutorials",
      url: location.href,
    });
    document.getElementById("out").textContent = "share ok";
  } catch (e) {
    document.getElementById("out").textContent = e.message;
  }
};
