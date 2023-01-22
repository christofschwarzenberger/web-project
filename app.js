const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('#header');

if (screen.width < 800) {
  document.getElementById('timeline-link').href = "#mobile-time-beam";
}

function showMenu() {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
}


// Next/previous controls
function plusSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++){
    if (slides[i].style.display != "none") {
      showSlides(i + n + 1);
      return;
    }
  }
  showSlides(0);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var newIndex = n;
  if (n > slides.length) {
    newIndex = 1 
  }
  
  if (n < 1) {
    newIndex = slides.length;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); 
  }
  
  slides[newIndex - 1].style.display = "flex";
  
  dots[newIndex - 1].className += " active";
}




