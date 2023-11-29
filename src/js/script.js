/*jslint devel: true, browser: true, white: true*/
/*jslint maxerr: 10, es6, node, single, for, bitwise, for, multivar*/
/*eslint-env es6, es2017, es2018*/
/*eslint-disable no-console,*/
/*global console*/

//$(document).ready(function(){
//  $('.carousel__inner').slick({
//    speed: 600,
//    adaptiveHeight: true,
//    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"</button>',
//    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"</button>',
//    responsive: [
//    {
//      breakpoint: 992,
//      settings: {
//          dots: true,
//          arrows: false,
//      }
//    },
//  ]
//    });
//});


const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo("prev");
});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo("next");
});
