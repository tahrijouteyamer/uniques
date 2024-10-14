(function ($) {

    "use strict";
  
    var initSlider = function () {
      var swiper = new Swiper(".main-swiper", {
        slidesPerView: 3,
        spaceBetween: 80,
        speed: 700,
        loop: true,
        navigation: {
          nextEl: '.icon-arrow-right',
          prevEl: '.icon-arrow-left',
        },
        breakpoints: {
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        },
      });
      
      // swiper slider home 2
      $('.slideshow').each(function(){
        var space = $(this).attr('data-space') ? $(this).attr('data-space') : 0 ;
        var col = $(this).attr('data-col');
        if ( typeof col == "undefined" || !col) {
          col = 1;
        }
  
        var swiper = new Swiper(".slideshow", {
          slidesPerView: col,
          spaceBetween: space,
          speed: 1000,
          loop: true,
          navigation: {
            nextEl: '.icon-arrow-right',
            prevEl: '.icon-arrow-left',
          },
          pagination: {
            el: ".slideshow-swiper-pagination",
            clickable: true,
          },
        });
      });
  
      $('.product-thumbnail-slider').each(function(){
        var dir = $(this).attr('data-direction') ? $(this).attr('data-direction') : 'horizontal';
        var num = $(this).attr('data-num') ? $(this).attr('data-num') : 3;
  
        var thumb_slider = new Swiper(".product-thumbnail-slider", {
          slidesPerView: num,
          spaceBetween: 20,
          direction: dir,
          breakpoints: {
            0: {
              direction: "horizontal"
            },
            992: {
              direction: dir
            },
          },
        });
  
        var large_slider = new Swiper(".product-large-slider", {
          slidesPerView: 1,
          autoplay: true,
          spaceBetween: 0,
          effect: 'fade',
          thumbs: {
            swiper: thumb_slider,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
        
      });
  
  
    };
})(jQuery)
// Rest of the code will be updated in the future.