function mergeSortStable(items) {
  if (items.length <= 1) return items.slice();
  const mid = Math.floor(items.length / 2);
  const left = mergeSortStable(items.slice(0, mid));
  const right = mergeSortStable(items.slice(mid));
  const out = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i].score <= right[j].score) out.push(left[i++]);
    else out.push(right[j++]);
  }
  return out.concat(left.slice(i), right.slice(j));
}
function quickSortUnstable(items) {
  if (items.length <= 1) return items.slice();
  const pivot = items[items.length - 1].score;
  const left = [], mid = [], right = [];
  for (const it of items) {
    if (it.score < pivot) left.push(it);
    else if (it.score > pivot) right.push(it);
    else mid.push(it);
  }
  return quickSortUnstable(left).concat(mid, quickSortUnstable(right));
}
const data = [
  { name: "A", score: 2 }, { name: "B", score: 1 },
  { name: "C", score: 2 }, { name: "D", score: 1 }
];
const stable = mergeSortStable(data).map(x => x.name).join("");
const unstable = quickSortUnstable(data).map(x => x.name).join("");
document.getElementById("out").textContent =
  "equal scores preserved order (stable merge):   " + stable + "\n" +
  "equal scores may reorder (unstable quick):     " + unstable + "\n" +
  "stable keeps original relative order for ties.";
