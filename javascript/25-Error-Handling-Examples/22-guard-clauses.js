const out = document.getElementById("out");
function discount(price, code) {
  if (typeof price !== "number" || price < 0) {
    return { error: "Invalid price" };
  }
  if (!code) {
    return { error: "Missing coupon code" };
  }
  return { total: price * 0.9, code };
}
const r = discount(-5, "SAVE10");
out.textContent = r.error || "total: " + r.total;
