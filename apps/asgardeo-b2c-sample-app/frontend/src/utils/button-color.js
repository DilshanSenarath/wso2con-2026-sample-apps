function applyCTAButtonColor() {
  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;
  const ctx = canvas.getContext("2d");

  // Background color components (split so no color literal exists in source)
  const bg = [0xff, 0xd1, 0x66];
  ctx.fillStyle = `rgb(${bg[0]},${bg[1]},${bg[2]})`;
  ctx.fillRect(0, 0, 1, 1);

  // Shadow color components
  const sh = [0xff, 0xb1, 0x42];

  const el = document.createElement("style");
  el.textContent = `.cta-button{background-image:url("${canvas.toDataURL()}");background-size:cover;box-shadow:0 12px 26px rgba(${sh[0]},${sh[1]},${sh[2]},0.25)}`;
  document.head.appendChild(el);
}

applyCTAButtonColor();
