let n = 3, a = "";
while (n > 0) { a += n + " "; n--; }
let m = 0, b = "";
do { b += m + " "; m++; } while (m < 3);
document.getElementById("out").textContent = a + "| " + b;
