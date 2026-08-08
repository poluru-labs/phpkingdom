async function run(){
  const v = await Promise.resolve("done");
  document.getElementById("out").textContent = v;
}
run();
