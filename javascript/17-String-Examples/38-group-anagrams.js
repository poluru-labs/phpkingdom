function groupAnagrams(words) {
  const map = new Map();
  for (const w of words) {
    const key = w.split("").sort().join("");
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(w);
  }
  return [...map.values()];
}
document.getElementById("out").textContent =
  JSON.stringify(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
