const order = { customer: { address: { city: "Austin" } } };
document.getElementById("out").textContent =
  order.customer?.address?.city + " / " + order.customer?.phone?.number;
