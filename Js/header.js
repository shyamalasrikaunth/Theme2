
$(function () {
    var lastScrollTop = 0;
 
var $topbar = $('ar-header-top');
var $middlebar = $('ar-header-middle');
var $navbar = $('.navbar');
var $mainhead = $('.ar-header-main');
var $logo2 = $('.logo2');

$(window).scroll(function() {
    
    if ($(this).scrollTop()>1)
     {
        $topbar.hide();
        $middlebar.fadeOut();
        $navbar.addClass('sticky');
        $navbar.removeClass('bg-dark');
        $navbar.addClass('bg-light');
        $logo2.removeClass('d-none');
        $logo2.addClass('d-block');
        $mainhead.removeClass('header-main-bg');
        $mainhead.addClass('header-main-bgscroll');
     }
    else
     {
        $topbar.show();
        $middlebar.fadeIn();
        $navbar.removeClass('sticky');
        $navbar.addClass('bg-dark');
        $navbar.removeClass('bg-light');
        $logo2.addClass('d-none');
        $logo2.removeClass('d-block');
        $mainhead.addClass('header-main-bg');
        $mainhead.removeClass('header-main-bgscroll');
     }
 });
});