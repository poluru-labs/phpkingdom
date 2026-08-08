function age(birth, onDate) {
  let years = onDate.getFullYear() - birth.getFullYear();
  const m = onDate.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && onDate.getDate() < birth.getDate())) years--;
  return years;
}
const birth = new Date(1990, 5, 20);
const today = new Date(2024, 0, 15);
document.getElementById("out").textContent = "Age on Jan 15, 2024: " + age(birth, today) + " years";
