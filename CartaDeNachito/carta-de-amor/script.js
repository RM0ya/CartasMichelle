/* ---------- pétalos flotantes decorativos ---------- */
const petalSymbols = ['✿','❀','♡','✿','❀'];
const petalColors = ['#e6a8bc','#c9b7e0','#a9d9bf','#e2b98f'];

for (let i = 0; i < 14; i++) {
  const p = document.createElement('span');
  p.className = 'petal';
  p.textContent = petalSymbols[Math.floor(Math.random() * petalSymbols.length)];
  p.style.left = Math.random() * 100 + 'vw';
  p.style.fontSize = (12 + Math.random() * 14) + 'px';
  p.style.color = petalColors[Math.floor(Math.random() * petalColors.length)];
  p.style.animationDuration = (10 + Math.random() * 12) + 's';
  p.style.animationDelay = (Math.random() * 10) + 's';
  document.body.appendChild(p);
}

/* ---------- carrusel de sobres y apertura ---------- */
const track = document.getElementById('envelopeTrack');
const dotsWrap = document.getElementById('envelopeDots');
const letterModal = document.getElementById('letterModal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const modalSign = document.getElementById('modalSign');



let current = 0;

letters.forEach((letter, i) => {
  // Crear HTML del sobre
  const slide = document.createElement('div');
  slide.className = 'envelope-slide';
  
  slide.innerHTML = `
    <div class="envelope-wrap" data-index="${i}">
      <div class="letter-inside"><span class="peek-heart">${letter.previewText}</span></div>
      <div class="envelope-body"></div>
      <div class="pocket-left"></div>
      <div class="pocket-right"></div>
      <div class="flap"></div>
      <div class="seal">❤</div>
    </div>
  `;
  track.appendChild(slide);

  // Crear puntos (dots)
  const dot = document.createElement('button');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.addEventListener('click', () => goTo(i));
  dotsWrap.appendChild(dot);
});

function goTo(i) {
  current = (i + letters.length) % letters.length;
  
  // Calculamos la distancia tomando en cuenta el ancho del sobre (100%) más el espacio (40px)
  track.style.transform = `translateX(calc(-${current} * (100% + 40px)))`;
  
  document.querySelectorAll('.dot').forEach((d, idx) => {
    d.classList.toggle('active', idx === current);
  });
}

document.getElementById('prevEnvelope').addEventListener('click', () => goTo(current - 1));
document.getElementById('nextEnvelope').addEventListener('click', () => goTo(current + 1));

// Abrir el sobre al hacer clic
track.addEventListener('click', (e) => {
  const wrap = e.target.closest('.envelope-wrap');
  if (!wrap) return;

  const idx = parseInt(wrap.getAttribute('data-index'));
  if (idx !== current) return; // Solo permite abrir el sobre visible actualmente

  if (!wrap.classList.contains('opened')) {
    wrap.classList.add('opened');
    setTimeout(() => {
      openLetterModal(letters[idx]);
    }, 650);
  } else {
    openLetterModal(letters[idx]);
  }
});

function openLetterModal(letter) {
  modalTitle.textContent = letter.title;
  modalText.innerHTML = letter.text;
  modalSign.textContent = letter.sign;
  letterModal.classList.add('show');
}

// Cerrar modal de la carta
document.getElementById('closeLetterBtn').addEventListener('click', () => {
  letterModal.classList.remove('show');
});
letterModal.addEventListener('click', (e) => {
  if (e.target === letterModal) letterModal.classList.remove('show');
});

// Controles del teclado
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') goTo(current + 1);
  if (e.key === 'ArrowLeft') goTo(current - 1);
  if (e.key === 'Escape') letterModal.classList.remove('show');
});

// Obtén el elemento contenedor principal
const stage = document.querySelector('.stage');

function openLetterModal(letter) {
  modalTitle.textContent = letter.title;
  modalText.innerHTML = letter.text;
  modalSign.textContent = letter.sign;
  letterModal.classList.add('show');
  
  // Agrega la clase al contenedor principal para que suban los títulos
  if (stage) stage.classList.add('letter-opened');
}

// Al cerrar la carta
// Función para cerrar la carta y guardarla en el sobre
function closeLetter() {
  // 1. Ocultar la carta desplegada (modal)
  letterModal.classList.remove('show');
  if (stage) stage.classList.remove('letter-opened');

  // 2. Esperar a que la carta desaparezca y luego cerrar el sobre activo
  setTimeout(() => {
    const currentWrap = track.children[current]?.querySelector('.envelope-wrap');
    if (currentWrap && currentWrap.classList.contains('opened')) {
      currentWrap.classList.remove('opened');
    }
  }, 250); // Tiempo ajustado a la animación de salida del modal
}

// Asegurar los listeners con la nueva función
document.getElementById('closeLetterBtn').onclick = closeLetter;

letterModal.onclick = (e) => {
  if (e.target === letterModal) closeLetter();
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') goTo(current + 1);
  if (e.key === 'ArrowLeft') goTo(current - 1);
  if (e.key === 'Escape') closeLetter();
});

// Asigna la función de cerrar al botón y al clic fuera del modal
document.getElementById('closeLetterBtn').addEventListener('click', closeLetter);
letterModal.addEventListener('click', (e) => {
  if (e.target === letterModal) closeLetter();
});

// En los controles de teclado:
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') goTo(current + 1);
  if (e.key === 'ArrowLeft') goTo(current - 1);
  if (e.key === 'Escape') closeLetter();
});