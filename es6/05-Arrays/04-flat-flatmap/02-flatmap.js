const words = ["a b", "c"];
document.getElementById("out").textContent =
  words.flatMap((w) => w.split(" ")).join(",");
