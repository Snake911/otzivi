$(document).ready(function() {
    wow = new WOW({
        mobile: false
    })
    wow.init();
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

    $('.agree [type="checkbox"]').click(function() {
        if($(this).is(':checked')) {
            $('.agree').addClass('checked');
        } else {
            $('.agree').removeClass('checked');
        }
    });

    $('.order').click(function() {
        modalOpen($('.modal-order'));
    });

    $('.overlay').click(function(e) {
        if(e.target == e.currentTarget) {
            modalClose();
        }        
    });

    $('.close-modal').click(function(e) {
        if(e.target == e.currentTarget) {
            modalClose();
        }        
    });

    $(document).keydown(function(e) {
        if(e.keyCode === 27) {
            modalClose();
        }
    });

    function modalOpen(modal) {
        $('.overlay').show();
        $('body').css('overflow-y', 'hidden');
        modal.show();
    }

    function modalClose() {
        $('.overlay').hide();
        $('body').css('overflow-y', '');
        $('.modal').hide();
    }
});