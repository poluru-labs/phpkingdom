function canUseLocalStorage() {
  try {
    const k = "__t";
    localStorage.setItem(k, "1");
    localStorage.removeItem(k);
    return true;
  } catch (e) {
    return false;
  }
}
document.getElementById("out").textContent = "localStorage usable: " + canUseLocalStorage();
