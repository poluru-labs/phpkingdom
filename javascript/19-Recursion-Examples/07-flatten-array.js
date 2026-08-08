function flatten(arr) {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) return acc.concat(flatten(item));
    return acc.concat(item);
  }, []);
}
const nested = [1, [2, [3, 4], 5], 6];
document.getElementById("out").textContent = JSON.stringify(flatten(nested));
