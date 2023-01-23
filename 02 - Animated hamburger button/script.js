const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', e => {
  hamburger.classList.toggle('active');
});