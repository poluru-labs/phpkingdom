function getSite() {
  return Promise.resolve("phpkingdom.com");
}
async function main() {
  const site = await getSite();
  document.getElementById("out").textContent = "site=" + site;
}
main();
