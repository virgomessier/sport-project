/*jslint devel: true, browser: true, white: true*/
/*jslint maxerr: 10, es6, node, single, for, bitwise, for, multivar*/
/*eslint-env es6, es2017, es2018*/
/*eslint-disable no-console,*/
/*global console*/

$(document).ready(function () {

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.items-wrapper').removeClass('items-wrapper_active').eq($(this).index()).addClass('items-wrapper_active');
    });

    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.items-wrapper__content').eq(i).toggleClass('items-wrapper__content_unactive');
                $('.items-wrapper__list').eq(i).toggleClass('items-wrapper__list_unactive');
            })
        });
    }

    toggleSlide('.items-wrapper__more');
    toggleSlide('.items-wrapper__list-link');

    // Modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('fast');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('fast');
    });
    $('.button_buy').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.items-wrapper__main-text').eq(i).text());
            $('.overlay, #order').fadeIn('fast');
        });
    });
    function valideForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите имя",
                    minlength: jQuery.validator.format("Введите {0} символа")
                },
                phone: "Пожалуйста, введите номер телефон",
                email: {
                    required: "Введите email",
                    email: "Ваш email адрес должен содержать @"
                }
            }
        });
    };
    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");
});

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
