const a = [3, 1, 2];
document.getElementById("out").textContent =
  "sorted=" + a.toSorted((x, y) => x - y) + "\norig=" + a;
