$(document).ready(function() {
    new WOW().init();
    $('.phone').mask('+7 (999) 999-99-99');
    $('.header_burger').click(function() {
        $(this).toggleClass('opened');
        $('.mobile_contacts').toggleClass('opened');
    });

    if($(window).width() <= 1200) {
        $('.screen_right').append($('.form_callback'));
    }
    $(window).resize(function() {
        if($(window).width() <= 1200) {
            $('.screen_right').append($('.form_callback'));
        } else {
            $('.screen_left').append($('.form_callback'));
        }
    });
});