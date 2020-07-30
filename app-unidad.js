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

