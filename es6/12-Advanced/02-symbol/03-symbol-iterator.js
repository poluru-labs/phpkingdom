const range = {
  from: 1,
  to: 3,
  [Symbol.iterator]() {
    let cur = this.from;
    const end = this.to;
    return {
      next() {
        if (cur <= end) return { value: cur++, done: false };
        return { done: true };
      },
    };
  },
};
document.getElementById("out").textContent = [...range].join(",");
