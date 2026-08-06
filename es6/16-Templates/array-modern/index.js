const a = [3,1,2]; const sorted = a.toSorted ? a.toSorted() : [...a].sort(); document.getElementById("out").textContent = sorted.join(",");
