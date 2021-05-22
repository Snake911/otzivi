$(document).ready(function() {
    $('.header_burger').click(function() {
        $(this).toggleClass('opened');
        $('.mobile_contacts').toggleClass('opened');
    });
});