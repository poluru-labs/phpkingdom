sessionStorage.setItem("pk-visit", String(Number(sessionStorage.getItem("pk-visit") || 0) + 1));
document.getElementById("out").textContent = "visits this tab: " + sessionStorage.getItem("pk-visit");
