$(function () {
    "use strict";
    $('.carousel').carousel({
        interval: 2000
    });
    // window scrolling when clicking on nav-menu list
    $('.navbar-nav li a').on("click", function () {
        var data = $(this).data('class');
        $('html,body').animate({
            'scrollTop': $('#' + data + '').offset().top
        }, 1500);
    });
    /*cashing the scroll top */
    var scrollButton = $("#scroll-top");
    $(window).on("scroll", function () {

        if ($(this).scrollTop() >= 700) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });
    scrollButton.click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 2700);
    });
});