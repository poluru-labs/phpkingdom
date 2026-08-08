document.getElementById("out").textContent = String((performance.getEntriesByType('navigation')[0]||{}).type);
