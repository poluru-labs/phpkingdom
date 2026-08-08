document.getElementById("out").textContent =
`fetch() does not expose upload progress events.
Use XMLHttpRequest for progress:

const xhr = new XMLHttpRequest();
xhr.open("POST", "/api/upload");
xhr.upload.onprogress = (e) => {
  if (e.lengthComputable) {
    const pct = Math.round((e.loaded / e.total) * 100);
    console.log(pct + "%");
  }
};
xhr.send(formData);`;
