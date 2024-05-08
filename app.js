const botoncomprar = document.querySelectorAll('.btn-5');

botoncomprar.forEach(function(boton) {
  let originalColor = boton.style.backgroundColor;
  boton.onmouseout = function() {
    boton.style.backgroundColor = 'black';
  };
  boton.onmouseover = function() {
    boton.style.backgroundColor = originalColor;
  };
});

var swiper = new Swiper(".mySwiper",{
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: false,
    coverflowEffect: {
      depth: 500,
      modifer:1,
      slidesShadows: true
    }
  })

const botonservicio = document.querySelectorAll('.services .btn-1');

botonservicio.forEach(function(botonS) {
  let activo = false;

  botonS.onclick = function() {
    if (!activo) {
      botonS.style.backgroundColor = 'red';
      activo = true;
    } else {
      botonS.style.backgroundColor = '';
      activo = false;
    }
  };
});


const agotadoColumnas = document.querySelectorAll('.agotado-columna');

agotadoColumnas.forEach((columna) => {
  columna.addEventListener('click', () => {
    alert('Lo sentimos, este juego está agotado.');
  });
});

const ventanaEmergente = window.open('', 'Ventana emergente', 'width=400,height=300');
ventanaEmergente.document.write('<h1>Entraste a la mejor página</h1>');


const reviewForm = document.getElementById('review-form');

reviewForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const review = document.getElementById('review').value;
  alert(`La siguiente reseña se envió:\n\nNombre: ${name}\nReseña: ${review}`);
  document.getElementById('name').value = '';
  document.getElementById('review').value = '';
});
