function createQueue() {
  let chain = Promise.resolve();
  return function enqueue(task) {
    const run = chain.then(task);
    chain = run.catch(() => {});
    return run;
  };
}
const enqueue = createQueue();
const logs = [];
enqueue(async () => { logs.push("1"); });
enqueue(async () => { await new Promise((r) => setTimeout(r, 50)); logs.push("2"); });
enqueue(async () => { logs.push("3"); document.getElementById("out").textContent = logs.join(" -> "); });
