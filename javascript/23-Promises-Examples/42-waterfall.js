function getUser() {
  return Promise.resolve({ id: 7, name: "Ada" });
}
function getOrders(userId) {
  return Promise.resolve([{ id: 1, userId }, { id: 2, userId }]);
}
getUser()
  .then((user) => getOrders(user.id).then((orders) => ({ user, orders })))
  .then((data) => {
    document.getElementById("out").textContent = JSON.stringify(data);
  });
