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

window.onbeforeunload = function() {
  alert('Entrando a la mejor página!');
};

const ventanaEmergente = window.open('', 'Ventana emergente', 'width=400,height=300');
ventanaEmergente.document.write('<h1>¡pagina cheta!</h1>');

