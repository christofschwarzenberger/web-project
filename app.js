const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('#header');

if (screen.width < 800) {
  document.getElementById('timeline-link').href = "#mobile-time-beam";
}

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});


/*
var onScroll = function () {
  var scroll_position = window.scrollY;
  if(!document.URL.includes("index")){
    return;
  }
  if(scroll_position > 250){
    header.style.backgroundColor = "#303030";
  }else{
    header.style.backgroundColor = "transparent";
  }
}

document.addEventListener("touchmove", onScroll);
document.addEventListener('scroll', onScroll);


document.addEventListener('touchmove', () =>{
  if(!document.URL.includes("index")){
      return;
  }
  var scroll_position = window.pageYOffset;
  if(scroll_position > 250){
      header.style.backgroundColor = "#303030";
  }else{
      header.style.backgroundColor = "transparent";
  }
});*/

let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  if(!document.URL.includes("index")){
    return;
  }

  if(lastKnownScrollPosition > 250){
    header.style.backgroundColor = "#303030";
  }else{
    header.style.backgroundColor = "transparent";
  }
}

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.pageYOffset;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});

/*
document.addEventListener('scroll', () =>{
    if(!document.URL.includes("index")){
        return;
    }
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = "#303030";
    }else{
        header.style.backgroundColor = "transparent";
    }
});
*/

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}




