//  MOOTH SCRILLING EFFECT 

  // Add an event listener to all anchor links
document.addEventListener("DOMContentLoaded", function () {
const anchorLinks = document.querySelectorAll('a[href^="#"]');
for (const anchorLink of anchorLinks) {
anchorLink.addEventListener("click", smoothScroll);
}
});

// Smooth scrolling function
function smoothScroll(event) {
event.preventDefault();
const targetId = this.getAttribute("href");
const targetElement = document.querySelector(targetId);
if (targetElement) {
const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
window.scrollTo({
  top: targetPosition,
  behavior: "smooth",
});
}
}


const responsive = {
  0:{
    items:1
  },
  320:{
    items:1
  },
  560: {
    items:2
  },
  991:{
    items:3
  },
 }
  
$(document).ready(function(){

    // .......owl carousel document......
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 15000,
        dots: false,
        nav: true,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
        responsive:responsive
    });  
    
 })

 var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    nav: true,
    autoplay: true,
    autoplayTimeout: 20000,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop: true,
  });

// 320px — 480px: Mobile devices.
// 481px — 768px: iPads, Tablets.
// 769px — 1024px: Small screens, laptops.
// 1025px — 1200px: Desktops, large screens.
// 1201px and more — Extra large screens
 