const range = {
  from: 1,
  to: 3,
  [Symbol.iterator]() {
    let n = this.from;
    const last = this.to;
    return {
      next() {
        if (n <= last) return { value: n++, done: false };
        return { done: true };
      }
    };
  }
};
document.getElementById("out").textContent = [...range].join(",");
