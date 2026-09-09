const form = document.getElementById('qr-form');
const output = document.getElementById('output');
const download = document.getElementById('download');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = document.getElementById('text').value.trim();
  const size = Number(document.getElementById('size').value);
  const color = document.getElementById('color').value;

  output.innerHTML = '';
  new QRCode(output, {
    text,
    width: size,
    height: size,
    colorDark: color,
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H,
  });

  // qrcodejs renders a canvas; expose it as a download link once drawn
  setTimeout(() => {
    const canvas = output.querySelector('canvas');
    if (!canvas) return;
    download.href = canvas.toDataURL('image/png');
    download.hidden = false;
  }, 50);
});
