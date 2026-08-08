const state = { user: { name: "Ada", score: 10 }, ok: true };
const next = { ...state, user: { ...state.user, score: state.user.score + 5 } };
document.getElementById("out").textContent = "old=" + state.user.score + ", new=" + next.user.score;
