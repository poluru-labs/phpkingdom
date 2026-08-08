function fakeFetch(){
  return Promise.resolve({ json: () => Promise.resolve({ ok: true }) });
}
fakeFetch().then(r => r.json()).then(d => {
  document.getElementById("out").textContent = JSON.stringify(d);
});
