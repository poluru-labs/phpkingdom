document.getElementById("go").onclick = async () => {
  if (typeof PaymentRequest !== "function") {
    document.getElementById("out").textContent = "unsupported";
    return;
  }
  try {
    const pr = new PaymentRequest(
      [{ supportedMethods: "https://example.com/pay" }],
      { total: { label: "Demo", amount: { currency: "USD", value: "1.00" } } }
    );
    const ok = await pr.canMakePayment();
    document.getElementById("out").textContent = "canMakePayment=" + ok;
  } catch (e) {
    document.getElementById("out").textContent = e.name + ": " + e.message;
  }
};
