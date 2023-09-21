$(document).ready(function(){

  // banner slider
$('.banner-main').slick({
    slideToScroll: 1,
    slideToShow: 1,
    prevArrow: '<i class="fa-solid fa-circle-arrow-left prev"></i>',
    nextArrow: '<i class="fa-solid fa-circle-arrow-right next"></i>'
})

// testimonial slider
$('.testi-nav-item').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.testi-nav'
});
$('.testi-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.testi-nav-item',
  vertical: true,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: 0,
  prevArrow: '<i class="fa-solid fa-angle-up prev"></i>',
  nextArrow: '<i class="fa-solid fa-angle-down next"></i>'
});
// counter part stat
$('.counter').counterUp({
  delay: 10,
  time: 2000
});

// lightbox part
lightbox.option({
  'resizeDuration': 800,
  'wrapAround': true,
})

// brand part 
$('.slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false
});
	

// servic part

$('.ser-slick').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  centerMode: true,
  centerPadding: '0px',
  prevArrow: '<i class="fa-solid fa-angle-up prev"></i>',
  nextArrow: '<i class="fa-solid fa-angle-down next"></i>'

});

})
// back to top 
const scroll = document.querySelector(".backtotop")

window.addEventListener("scroll", () =>{
  if(window.scrollY > 300){
    scroll.classList.add("totop")
  }else(
    scroll.classList.remove("totop")
  )
})
scroll.addEventListener("click", () =>{
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})

// stiky navbar
const sticky = document.querySelector(".navbar")
window.addEventListener("scroll", () =>{
  if(window.scrollY > 20){
    sticky.classList.add("sticky")
  }else(
    sticky.classList.remove("sticky")
  )
})

