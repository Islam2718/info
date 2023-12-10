
(function($){
    'use strict';
    	// mobile menu responsive
      $(document).on('click','.mobile-bar',function(){
        $(".menu").toggleClass("close");
            $(".main-menu").toggleClass("open");
            $(".overlay").addClass("active");
            $("body").addClass("overflow");
        });

        // overlay remove
        $('.overlay').on('click', function(){
          $('body,.menu,.mobile-bar').removeClass('close');
          $('body,.menu').removeClass('open');
          $('body,.menu,.overlay').removeClass('active');
          $('body').removeClass('overflow');
        });
        // menu-li remove
        $('.menu-li').on('click', function(){
          $('body,.menu,.mobile-bar').removeClass('close');
          $('body,.menu').removeClass('open');
          $('body,.menu,.overlay').removeClass('active');
          $('body').removeClass('overflow');
        });

        //search area
        $(document).on('click','.search-image',function(){
          $(".search-area").addClass("open");
          $("body").addClass("scroll-lock");
        });
        
        $(document).on('click','.search-overlay',function(){
          $(".search-area").removeClass("open");
          $("body").removeClass("scroll-lock");
        });

        $(document).on('click','.cross-overlay',function(){
          $(".search-area").removeClass("open");
          $("body").removeClass("scroll-lock");
        });

      // scroll up start here
      $(function(){
        $(window).scroll(function(){
          if ($(this).scrollTop() > 300) {
            $('.scrollToTop').css({'bottom':'2%', 'opacity':'1','transition':'all .5s ease'});
          } else {
            $('.scrollToTop').css({'bottom':'-30%', 'opacity':'0','transition':'all .5s ease'});
          }
        });
        //Click event to scroll to top
        $('.scrollToTop').on('click', function(){
          $('html, body').animate({scrollTop : 0},500);
          return false;
        });
      });
        
        // swiper-service slider js 
        var swiper = new Swiper(".mySwiper", {
          spaceBetween: 50,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          breakpoints: {
            425: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          },
        });

  // project view area
  // $(document).on('click','.popup-btn',function(){
  //   $(".popup-portfolio-area").addClass("open");
  //   $("body").addClass("overflow");
  // });
  // $(document).on('click','.close',function(){
  //   $(".popup-portfolio-area").removeClass("open");
  //   $("body").removeClass("overflow");
  // });
  // project collaps and expand
  $(document).on('click','.collaps-button',function(){
      $(".project-attribute").toggleClass("open");
      $(".collaps-button").toggleClass("rotade");
    });
  // isotop activation
  $(document).ready(function(){
    var $grid = $('.grid').isotope({
      itemSelector: '.element-item',
      layoutMode: 'fitRows',
      transitionDuration : '0.4s',
      getSortData: {
        name: '.name',
        symbol: '.symbol',
        number: '.number parseInt',
        category: '[data-category]',
        weight: function( itemElem ) {
          var weight = $( itemElem ).find('.weight').text();
          return parseFloat( weight.replace( /[\(\)]/g, '') );
        }
      }
    });
    
    // filter functions
    var filterFns = {
      // show if number is greater than 50
      numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt( number, 10 ) > 50;
      },
      // show if name ends with -ium
      ium: function() {
        var name = $(this).find('.name').text();
        return name.match( /ium$/ );
      }
    };
    
    // bind filter button click
    $('#filters').on( 'click', 'button', function() {
      var filterValue = $( this ).attr('data-filter');
      // use filterFn if matches value
      filterValue = filterFns[ filterValue ] || filterValue;
      $grid.isotope({ filter: filterValue });
    });
    
    // bind sort button click
    $('#sorts').on( 'click', 'button', function() {
      var sortByValue = $(this).attr('data-sort-by');
      $grid.isotope({ sortBy: sortByValue });
    });
    
    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
      });
    });    
    });
    
    // filter functions
// scroll top function
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if(currentScrollPos == 0){
    console.log("yes");
    document.querySelector(".header").classList.remove("fixed");
    document.querySelector(".header").classList.add("show");
    document.querySelector(".header").classList.remove("hide");
  }
  else if (prevScrollpos > currentScrollPos) {
    document.querySelector(".header").classList.add("fixed");
    document.querySelector(".header").classList.remove("show");
    document.querySelector(".header").classList.remove("hide");
  }
   else {
    //document.getElementById("navbar").style.top = "-50px";
    document.querySelector(".header").classList.remove("fixed");
    document.querySelector(".header").classList.remove("show");
    document.querySelector(".header").classList.add("hide");
  }
  prevScrollpos = currentScrollPos;
}
    
    
    // testimonial-slider

    var swiper = new Swiper(".testimonal-swiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      
    });
    
    // blog-slider

    var swiper = new Swiper(".blog-swiper", {
      spaceBetween: 0,
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        425: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
      },
    });

    // counter up js
    $( document ).ready( function() {
	
      jQuery(function ($) {
          "use strict";
        
          var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"
        
          var $counters = $(".counter");
        
          /* Start counting, do this on DOM ready or with Waypoints. */
        $counters.each(function (ignore, counter) {
          var waypoint = new Waypoint( {
            element: $(this),
            handler: function() { 
              counterUp(counter, {
                duration: 2000,
                delay: 16,
              }); 
              this.destroy();
            },
            offset: 'bottom-in-view',
          } );
        });
    
      });
     });

})(jQuery);

// function see_all(){
//   var grid = document.querySelectorAll(".element-item");
//   if(grid.length <= 11){
//     for(var i = 12; i<= grid.length; i++){
//       document.querySelectorAll(".element-item")[i].style.display = "block";
//       grid[i].style.height = "auto";
//       console.log("if right");
//     }
//   }
//   else{
//       for(var i = 12; i<= grid.length; i++){
//       grid[i].style.display = "block";
//       grid[i].style.height = 'auto';
//       console.log("else right");
//     }
//   }
// }

// function gridfunction(){
//   var grid = document.querySelectorAll(".element-item");
//   if(grid.length > 11){
//     for(var i = 12; i<= grid.length; i++){
//       grid[i].style.display = 'none';
//       grid[i].style.height = 0 + "px";
//     }
//   }
//   else{
//     console.log("no")
//   }
// }





// window.onload = gridfunction();