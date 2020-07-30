document.querySelector('.menu').addEventListener('click', ()=> {
  document.querySelector('.ul').classList.toggle('active')
  document.querySelector('header').classList.toggle('act-toggle')
  document.querySelector('.toggle').classList.toggle('pad-toggle')
})

jQuery(document).ready(function() {
  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
});

// Carrusel

let currentSlide = 1;
const showSlide = (slideIndex) => {
  const slides = document.getElementsByClassName('carouselImgs');
  if (slideIndex > slides.length) { currentSlide = 1 }
  if (slideIndex < 1) { currentSlide = slides.length }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slides[currentSlide - 1].style.display = 'flex'
}

const previousSlide = () => {
  showSlide(currentSlide -= 1);
}

const nextSlide = () => {
  showSlide(currentSlide += 1);
}

window.onload = () => {
  showSlide(currentSlide);
  document.getElementById('prev').addEventListener('click', () => {
    previousSlide();
  })
  document.getElementById('next').addEventListener('click', () => {
    nextSlide();
  })
}