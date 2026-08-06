const nums = [1, 2, 3, 4, 5];
const m = Map.groupBy(nums, n => n % 2 === 0 ? "even" : "odd");
document.getElementById("out").textContent =
  "even=" + m.get("even") + "\nodd=" + m.get("odd");
