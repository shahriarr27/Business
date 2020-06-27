$(document).ready(function(){

  $(".banner-carousel").owlCarousel({
    loop:true,
    autoplay:true,
    dots:true,
    mouseDrag:false,
    smartSpeed: 500,
    autoplayTimeout:7000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive:{
       0:{
          items: 1
       },
       768:{
          items: 1
       },
       769:{
         items: 1
      }
    }
  });
  

  var swiper = new Swiper('.swiper-container', {
    loop: true,
    mousewheel: false,
    keyboard: false,
    autoplay: {
      delay: 1000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',

    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 1
      }
    }
  });

  
  $(".client-carousel").owlCarousel({
    loop:true,
    autoplay:true,
    dots:false,
    mouseDrag:true,
    smartSpeed: 500,
    margin: 10,
    autoplayTimeout:7000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive:{
       0:{
          items: 1
       },
       768:{
          items: 1
       },
       769:{
         items: 1
      }
    }
  });

  $(".client-img-carousel").owlCarousel({
    loop:true,
    autoplay:true,
    dots:true,
    mouseDrag:true,
    smartSpeed: 500,
    stagePadding: 0,
    center:true,
    margin: 10,
    autoplayTimeout:7000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive:{
       0:{
          items: 1,
          center: false
       },
       768:{
          items: 1
       },
       769:{
         items: 3,
         center: false
      }
    }
  });

//   AOS.init();
//   //animation on scroll navbar

// var siteScroll = function() {
//   $(window).on('scroll',function(){
//     if($(window).scrollTop()>100){
//         $('nav').addClass('nav-white');
//     }
//     else{
//         $('nav').removeClass('nav-white');
//     }
//   });
// };
// siteScroll();
// //typed.js

// var typed = new Typed('.type',{
//   strings:[
//     'wordpress themes',
//     'responsive website'
//   ],
//   smartBackspace: true,
//   typeSpeed: 40,
//   backSpeed: 30,
//   backDelay:3000,
//   loop: true,
//   naturalHeight: 900
// });

// //fancybox

// $('.fancybox').fancybox();

// //owl carousel

// $(".owl-carousel").owlCarousel({
//   loop:true,
//   autoplay:true,
//   dots:true,
//   smartSpeed: 500,
//   autoplayTimeout:5000,
//   responsive:{
//      0:{
//         items: 1
//      },
//      768:{
//         items: 1
//      },
//      769:{
//        items: 1
//     }
//   }
// });

});