async function deleteUser(id) {
  return { deleted: true, id, status: 204 };
}
deleteUser(42).then((res) => {
  document.getElementById("out").textContent = JSON.stringify(res);
});
