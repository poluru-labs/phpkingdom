function createClient(baseURL) {
  return {
    async get(path) {
      // const res = await fetch(baseURL + path);
      return { url: baseURL + path, method: "GET", demo: true };
    },
    async post(path, body) {
      return { url: baseURL + path, method: "POST", body, demo: true };
    }
  };
}
const api = createClient("https://api.phpkingdom.com");
Promise.all([api.get("/users"), api.post("/users", { name: "Ada" })])
  .then((calls) => {
    document.getElementById("out").textContent = JSON.stringify(calls, null, 2);
  });
