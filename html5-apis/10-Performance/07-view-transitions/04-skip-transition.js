const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
document.getElementById("out").textContent = "prefers-reduced-motion=" + reduce +
  "\nTip: skip startViewTransition when reduce is true.";
