performance.mark("a");performance.mark("b");performance.measure("m","a","b");document.getElementById("out").textContent=performance.getEntriesByName("m")[0].duration.toFixed(3);
