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

    const buttonPrev = document.getElementById('button-prev');
    const buttonNext = document.getElementById('button-next');
    const track = document.getElementById('track');
    const slickList = document.getElementById('slick-list');
    const slick = document.querySelectorAll('.slick');

    const slickWidth = slick[0].offsetWidth;

    buttonPrev.onclick = () => Move(1);
    buttonNext.onclick = () => Move(2);

    function Move(value) {
        const trackWidth = track.offsetWidth; //976
        const listWidth = slickList.offsetWidth; //198
        console.log(listWidth, trackWidth)
        track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);
        if(leftPosition > (trackWidth - listWidth)) {
          leftPosition = -slickWidth;
        }
        console.log(leftPosition);
        if(leftPosition < (trackWidth - listWidth) && value == 2) {
            track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
        } else if(leftPosition >= 0 && value == 1) {
            track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
        }
    }