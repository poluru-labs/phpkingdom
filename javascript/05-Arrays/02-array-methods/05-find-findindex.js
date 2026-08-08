const users = [{id:1},{id:2}];
document.getElementById("out").textContent = JSON.stringify(users.find(u => u.id === 2)) + " @ " + users.findIndex(u => u.id === 2);
