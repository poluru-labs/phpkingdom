let result = "";
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outer;
    result += i + "," + j + " ";
  }
}
document.getElementById("out").textContent = result;
