const out = document.getElementById("out");
const log = [];
const jobs = [
  () => "A",
  () => { throw new Error("B broke"); },
  () => "C",
];
const done = [];
for (const job of jobs) {
  try {
    done.push(job());
  } catch (e) {
    log.push(e.message);
  }
}
out.textContent = "done: " + done.join(", ") + "\nlogged: " + log.join(", ");
