const url = new URL("https://phpkingdom.com/tutorials?topic=js&level=beginner");
const params = Object.fromEntries(url.searchParams.entries());
document.getElementById("out").textContent = JSON.stringify(params, null, 2);
