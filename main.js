///////////////// Слайдер

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

  ///////////////// Обратная связь

  const feedbackBtn = document.querySelector('.contacts__feedback');
  const feedbackOverlay = document.querySelector('.feedbackoverlay');
  const feedback = document.querySelector('.feedback');
  const closeBtn = document.querySelector('.feedback__close');

  feedbackBtn.addEventListener("click", function() {
    feedbackOverlay.classList.add('visible');
    feedback.classList.add('visible');
    document.body.classList.add('hidden');
  })

  closeBtn.addEventListener('click', function() {
    feedbackOverlay.classList.remove('visible');
    feedback.classList.remove('visible');
    document.body.classList.remove('hidden');
  });

  feedbackOverlay.addEventListener('click', function() {
    event.preventDefault();
    feedbackOverlay.classList.remove('visible');
    feedback.classList.remove('visible');
    document.body.classList.remove('hidden');
  })

  feedback.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
  })

  ///////////////// Валидация формы

  const form = document.querySelector('.form');
  const formBtn = document.querySelector('.form__btn');
  const name = document.getElementById('name');
  const phone = document.getElementById('phone');
  const email = document.getElementById('email');

  function validate() {
    if (name.value == "") {
        name.classList.add("error");
        name.setAttribute('placeholder', 'Поле обязательно для заполнения');
        if (name.value !== "") {
          name.classList.remove("error");
        }
        return false;
    }
    if (phone.value == "") {
        phone.classList.add("error");
        phone.setAttribute('placeholder', 'Поле обязательно для заполнения');
      if (phone.value !== "") {
        phone.classList.remove("error");
      }
      return false;
    }
    if (email.value == "") {
      email.classList.add("error");
      email.setAttribute('placeholder', 'Поле обязательно для заполнения');
    if (email.value !== "") {
      email.classList.remove("error");
    }
  return false;
}
    else {
      return true;
    } 
  }

  name.addEventListener("focus", function() {
    name.classList.remove("error");
    name.setAttribute('placeholder', '');
  })

  phone.addEventListener("focus", function() {
    phone.classList.remove("error");
    phone.setAttribute('placeholder', '');
  })

  email.addEventListener("focus", function() {
    email.classList.remove("error");
    email.setAttribute('placeholder', '');
  })