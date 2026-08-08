function frequency(arr) {
  return arr.reduce((map, n) => {
    map[n] = (map[n] || 0) + 1;
    return map;
  }, {});
}
document.getElementById("out").textContent = JSON.stringify(frequency(["a","b","a","c","b","a"]));
