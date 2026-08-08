const outer = document.getElementById("outer");
document.getElementById("out").textContent =
  "outer contains inner? " + outer.contains(document.getElementById("inner")) +
  "\nouter contains aside? " + outer.contains(document.getElementById("aside"));
