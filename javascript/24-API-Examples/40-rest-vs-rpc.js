document.getElementById("out").textContent =
`REST:
GET    /api/users
GET    /api/users/42
POST   /api/users
PATCH  /api/users/42
DELETE /api/users/42

RPC-style:
POST /api/createUser
POST /api/getUserById
POST /api/deleteUser`;
