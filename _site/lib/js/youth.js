/*
1. timing Function
2. carousels
  2-1. home page subtitle carousel
  2-2. testimonials carousel
  2-3. about section images carousel
3. scrollTo
4. scrollToTop
5. preloader
6. parallax
7. facts counter
8. home fadeOut animation
9. contact form
10. YTPlayer
11. skills bar
12. GOOGLE ANALYTICS [for demonstration purposes only]
13. the Wall
*/


$(function() {
    "use strict";
	
	
    // 1. timing Function
    var timingFunction = "easeInOutQuart";
	
    // 2. carousels
    // 2-1. home page subtitle carousel
    $(".home-page-subtitle-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        margin: 0,
        center: true,
        dots: false,
        nav: false,
        touchDrag: false,
        mouseDrag: false,
        pullDrag: false,
        responsiveRefreshRate: 50
    });
    // 2-2. testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        margin: 0,
        center: true,
        dots: false,
        nav: false,
        touchDrag: true,
        mouseDrag: true,
        pullDrag: true,
        responsiveRefreshRate: 50
    });
    // 2-3. about section images carousel
    $(window).on("resize", function() {
        if ($(window).width() < 1024) {
            $(".about-section-images-carousel").owlCarousel({
                loop: true,
                autoplay: true,
                autoplaySpeed: 1000,
                autoplayTimeout: 5000,
                items: 1,
                margin: 0,
                center: true,
                dots: false,
                nav: true,
                touchDrag: true,
                mouseDrag: true,
                pullDrag: true,
                responsiveRefreshRate: 50,
                navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
            });
        } else {
            $(".about-section-images-carousel").trigger("destroy.owl.carousel");
        }
    }).trigger("resize");
	
    // 3. scrollTo
    $("[data-scroll-to]").on("click", function(e) {
        e.preventDefault();
        var scroll_element = "#" + $(this).data("scroll-to");
        var scrollOffset = $(scroll_element).offset().top;
        $("html, body").animate({
            scrollTop: scrollOffset
        }, 1400, timingFunction);
    });
	
    // 4. scrollToTop
    $(".scrollToTop").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1400, timingFunction);
    });
	
    $(window).on("load", function() {
        // 5. preloader
        $("#preloader").delay(400).fadeOut(400, timingFunction);
    });
	
    // 6. parallax
    $(".parallax-window").parallax(10);
	
    // 7. facts counter
    $(".facts-counter-number").appear(function() {
        var count = $(this);
        count.countTo({
            from: 0,
            to: count.html(),
            speed: 1200,
            refreshInterval: 60
        });
    });
	
    // 8. home fadeOut animation
    $(window).on("scroll", function() {
        $("h1.home-page-title, h2.home-page-title, h3.home-page-title").css("opacity", 1 - $(window).scrollTop() / $(".hero-fullscreen, #viewport").height());
    });
	
    // 9. contact form
    $("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
	
    // 10. YTPlayer
    $('#background-video').YTPlayer({
        videoId: "r8j-MWq4HZc", // DEMO URL is: https://www.youtube.com/watch?v=r8j-MWq4HZc
        mute: true, // sound options: true, false
        pauseOnScroll: false,
        repeat: true,
        fitToBackground: true
    });
	
    // 11. skills bar
    $(".show-skillbar").appear(function() {
        $(".skillbar").skillBars({
            from: 0,
            speed: 4000,
            interval: 100,
            decimals: 0
        });
    });


});


// 12. GOOGLE ANALYTICS [for demonstration purposes only]
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-3033286-18', 'auto');
ga('send', 'pageview');


// 13. the Wall
// intentionally REMOVED!