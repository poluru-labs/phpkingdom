document.getElementById("out").textContent =
  "Prefer setTimeout(() => {...}, 0)\n" +
  "Avoid setTimeout(\"doThing()\", 0)  // implicit eval";
setTimeout(() => {
  document.getElementById("out").textContent += "\n(function form works)";
}, 50);
