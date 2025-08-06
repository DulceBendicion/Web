// Configura aquí tus datos
const WHATSAPP_NUMBER = "51922857548";
const SITE_URL = "https://tuusuario.github.io/tu-repo/";
const LOGO_URL = "https://via.placeholder.com/200x200.png?text=Logo";

document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('phoneDisplay').textContent = '+' + WHATSAPP_NUMBER;
document.getElementById('qrLogo').querySelector('img').src = LOGO_URL;

function setQr(url) {
  const size = 400;
  const qrSrc = https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(url)};
  document.getElementById('qrImg').src = qrSrc;
}

setQr(SITE_URL);

function buildWhatsUrl(text) {
  return https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)};
}

document.getElementById('openWhats').href = buildWhatsUrl("Hola! Quiero hacer un pedido.");
document.getElementById('ctaOrder').addEventListener('click', e => {
  e.preventDefault();
  location.href = buildWhatsUrl("Hola! Quiero hacer un pedido, por favor.");
});

document.querySelectorAll('.orderBtn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const card = e.target.closest('.card');
    const name = card.dataset.name;
    const price = card.dataset.price;
    const msg = Hola! Quiero encargar: ${name} ${price}. ¿Está disponible?;
    window.open(buildWhatsUrl(msg), '_blank');
  });
});

document.getElementById('q').addEventListener('input', e => {
  const q = e.target.value.toLowerCase();
  document.querySelectorAll('#productList .card').forEach(card => {
    const txt = (card.dataset.name + ' ' + card.querySelector('p').innerText).toLowerCase();
    card.style.display = txt.includes(q) ? 'block' : 'none';
  });
});