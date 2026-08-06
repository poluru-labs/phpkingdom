const rows = [{t:"a"},{t:"b"},{t:"a"}]; const g = Object.groupBy ? Object.groupBy(rows, r => r.t) : { note: "no groupBy" }; document.getElementById("out").textContent = JSON.stringify(g);
