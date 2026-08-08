class Rect {
  constructor(w, h) { this.w = w; this.h = h; }
  get area() { return this.w * this.h; }
}
document.getElementById("out").textContent = String(new Rect(3, 4).area);
