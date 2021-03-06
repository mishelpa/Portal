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

document.getElementById('prev').style.display = 'none';

let currentSlide = 1;
const showSlide = (slideIndex) => {
  const slides = document.getElementsByClassName('carouselImgs');
  if (slideIndex > slides.length) { 
    currentSlide = 1; }
  if (slideIndex < 1) { currentSlide = slides.length }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[currentSlide - 1].style.display = 'flex'
  console.log(currentSlide);
  if (currentSlide === 1 ) {
    document.getElementById('prev').style.display = 'none';
    document.getElementById('next').style.display = 'block';
  } else {
    document.getElementById('prev').style.display = 'block';
    document.getElementById('next').style.display = 'none';
  }
}

const previousSlide = () => {
  showSlide(currentSlide -= 1);
}

const nextSlide = () => {
  showSlide(currentSlide += 1);
}

/* window.onload = () => {
  showSlide(currentSlide);
  document.getElementById('prev').addEventListener('click', () => {
    previousSlide();
  })
  document.getElementById('next').addEventListener('click', () => {
    nextSlide();
  })
} */

    /* const buttonPrev = document.getElementById('button-prev');
    const buttonNext = document.getElementById('button-next');
    const track = document.getElementById('track');
    const slickList = document.getElementById('slick-list');
    const slick = document.querySelectorAll('.slick');

    const slickWidth = slick[0].offsetWidth * 1.04;
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
    } */

let currentUnit = 1;
const showUnit = (indexUnit) => {
  const allUnit = document.getElementsByClassName('slick');
  if (indexUnit > allUnit.length) { 
    currentUnit = 1; }
  if (indexUnit < 1) { currentUnit = allUnit.length }
  for (let i = 0; i < allUnit.length; i++) {
    allUnit[i].style.display = 'none';
    allUnit[i].classList.add('difuminado');
  }
  
  if (currentUnit < 6) {
    allUnit[currentUnit - 1].style.display = 'flex';
    allUnit[currentUnit-1].classList.remove('difuminado');
    allUnit[currentUnit].style.display = 'flex';
  } 
  if (currentUnit === 6) {
    allUnit[0].style.display = 'flex'
    allUnit[1].style.display = 'flex'
    allUnit[0].classList.remove('difuminado');
  }

}

const previousUnit = () => {
  showUnit(currentUnit -= 1);
}

const nextUnit = () => {
  showUnit(currentUnit += 1);
}

window.onload = () => {

  showSlide(currentSlide);
  document.getElementById('prev').addEventListener('click', () => {
    previousSlide();
  })
  document.getElementById('next').addEventListener('click', () => {
    nextSlide();
  })

  showUnit(currentUnit);
  document.getElementById('button-prev').addEventListener('click', () => {
    previousUnit();
  })
  document.getElementById('button-next').addEventListener('click', () => {
    nextUnit();
  })
}
