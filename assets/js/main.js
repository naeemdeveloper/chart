(function ($) {
    
    "use strict"
    $(document).ready(function () {

        // menu active
        $('.menu-area li').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
		});

        // menu toggle bar
        $(".menu-toggle-bar").on('click', function(){
            $(this).toggleClass("active");
        });
        
        // mobile menu active
        $(".menu-toggle-bar").on('click', function(){
            $('.mobile-menu').toggleClass("active");
        });

        // mbolie menu active style
        $('.mobile-menu li').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
            $(".mobile-menu").toggleClass("active");
            $(".menu-toggle-bar").toggleClass("active");
		});

    });

    $(window).on('scroll', function () {

        // back to top scroll
        var ScrollTop = $('.back-to-top');

        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }

    });

    $(window).on('load', function () {

        // wow js
        new WOW().init();

        // preloader
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        // back to top animate
        $(".back-to-top").on('click', function () {
            $("html").animate({
                "scrollTop": "0"
            }, 1000);
        });

    });

})(jQuery);
