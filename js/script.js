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

  var initQuantitySpinner = function(){

    $('.product-qty').each(function(){

      var $el_product = $(this);
      var quantity = 0;

      $el_product.find('.quantity-right-plus').click(function(e){
          e.preventDefault();
          var quantity = parseInt($el_product.find('#quantity').val());
          $el_product.find('#quantity').val(quantity + 1);
      });

      $el_product.find('.quantity-left-minus').click(function(e){
          e.preventDefault();
          var quantity = parseInt($el_product.find('#quantity').val());
          if(quantity>0){
            $el_product.find('#quantity').val(quantity - 1);
          }
      });

    });

  }

  var initJarallax = function () {
    jarallax(document.querySelectorAll(".jarallax"));

    jarallax(document.querySelectorAll(".jarallax-keep-img"), {
      keepImg: true,
    });
  }

  var initScrollNav = function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
      $('.navbar.fixed-top').addClass("bg-black");
    }else{
      $('.navbar.fixed-top').removeClass("bg-black");
    }
  }

  var searchPopup = function() {
    $('.navbar').on('click', '.search-button', function(e) {
      $('.search-popup').toggleClass('is-visible');
    });

    $('.navbar').on('click', '.btn-close-search', function(e) {
      $('.search-popup').toggleClass('is-visible');
    });
    
    $(".search-popup-trigger").on("click", function(b) {
        b.preventDefault();
        $(".search-popup").addClass("is-visible"),
        setTimeout(function() {
            $(".search-popup").find("#search-popup").focus()
        }, 350)
    }),
    $(".search-popup").on("click", function(b) {
        ($(b.target).is(".search-popup-close") || $(b.target).is(".search-popup-close svg") || $(b.target).is(".search-popup-close path") || $(b.target).is(".search-popup")) && (b.preventDefault(),
        $(this).removeClass("is-visible"))
    }),
    $(document).keyup(function(b) {
        "27" === b.which && $(".search-popup").removeClass("is-visible")
    })
  }

  $(window).scroll(function() {    
    initScrollNav();
  }); 

  $(window).load(function () {
    $(".preloader").fadeOut();

    $(".btn-nav").on("click tap", function () {
      $(".nav-content").toggleClass("showNav hideNav").removeClass("hidden");
      $(this).toggleClass("animated");
    });

    initIsotope();
  });

  // document ready
  $(document).ready(function () {
    searchPopup();
    initJarallax();
    initQuantitySpinner();
    initSlider();

    $(".youtube").colorbox({
      iframe: true,
      innerWidth: 960,
      innerHeight: 585
    });

    AOS.init({
      duration: 1200,
      once: true,
    })

    var Sticky = new hcSticky('.sticky-info', {
      stickTo: 'section.single-product',
      innerTop: 200,
      responsive: {
        980: {
          disable: true
        }
      }
    });

  });

})(jQuery)