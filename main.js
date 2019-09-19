var slides = document.querySelectorAll('.slider__list .slider__item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 4000);

function nextSlide() {
  goToSlide(currentSlide+1);
 }
 
 function previousSlide() {
  goToSlide(currentSlide-1);
 }
 
 function goToSlide(n) {
  slides[currentSlide].className = 'slider__item';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = 'slider__item showing';
 }

var playing = true;
 
function pauseSlideshow() {
    playing = false;
    clearInterval(slideInterval);
}
 
function playSlideshow() {
    playing = true;
    slideInterval = setInterval(nextSlide,4000);
}

var next = document.getElementById('next');
var previous = document.getElementById('prev');
  
  next.onclick = function() {
      pauseSlideshow();
      nextSlide();
  };

  previous.onclick = function() {
      pauseSlideshow();
      previousSlide();
  };