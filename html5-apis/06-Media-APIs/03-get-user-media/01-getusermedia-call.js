document.getElementById("btn").onclick = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    document.getElementById("v").srcObject = stream;
    document.getElementById("out").textContent = "stream active";
  } catch (e) {
    document.getElementById("out").textContent = e.name + ": " + e.message;
  }
};
