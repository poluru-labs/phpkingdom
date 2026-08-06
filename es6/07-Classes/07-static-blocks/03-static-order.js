const log = [];
class Demo {
  static a = log.push("a");
  static { log.push("block"); }
  static b = log.push("b");
}
document.getElementById("out").textContent = log.join(" → ");
