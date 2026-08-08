async function load() {
  const out = document.getElementById("out");
  out.textContent = "Loading...";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    out.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    out.textContent = "Live fetch failed (" + err.message + ").\n" +
      "Fallback demo payload:\n" +
      JSON.stringify({ userId: 1, id: 1, title: "delectus aut autem", completed: false }, null, 2);
  }
}
load();
