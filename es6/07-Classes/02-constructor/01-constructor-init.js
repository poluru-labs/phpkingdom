class Box {
  constructor(w, h) { this.w = w; this.h = h; }
  area() { return this.w * this.h; }
}
document.getElementById("out").textContent = "area=" + new Box(3, 4).area();
