const nums = [2,4,6];
document.getElementById("out").textContent = "every even=" + nums.every(n => n % 2 === 0) + "\nsome >5=" + nums.some(n => n > 5);
