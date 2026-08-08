const nums = [2, 3];
nums.unshift(1);
nums.push(4);
nums.pop();
document.getElementById("out").textContent = nums.join(", ");
