function hanoi(n, from, to, aux, moves = []) {
  if (n === 1) {
    moves.push(from + " → " + to);
    return moves;
  }
  hanoi(n - 1, from, aux, to, moves);
  moves.push(from + " → " + to);
  hanoi(n - 1, aux, to, from, moves);
  return moves;
}
const moves = hanoi(3, "A", "C", "B");
document.getElementById("out").textContent = moves.map((m, i) => (i + 1) + ". " + m).join("\n");
