function subarraySum(arr, target) {
  let start = 0, sum = 0;
  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];
    while (sum > target && start <= end) sum -= arr[start++];
    if (sum === target) return arr.slice(start, end + 1);
  }
  return [];
}
document.getElementById("out").textContent = "[" + subarraySum([1,2,3,7,5], 12) + "]";
