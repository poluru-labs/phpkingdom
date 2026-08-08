const thenable = {
  then(resolve) { resolve("from thenable"); }
};
Promise.resolve(thenable).then((v) => {
  document.getElementById("out").textContent = v;
});
