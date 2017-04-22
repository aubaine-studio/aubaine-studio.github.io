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

$(function () {
    "use strict";

    // 1. timing Function
    var timingFunction = "easeInOutQuart";

    // 2. carousels 2-1. home page subtitle carousel
    $(".home-page-subtitle-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 2500,
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
        autoplayTimeout: 4000,
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
    $(window).on("resize", function () {
        if ($(window).width() < 1024) {
            $(".about-section-images-carousel").owlCarousel({
                loop: true,
                autoplay: true,
                autoplaySpeed: 1000,
                autoplayTimeout: 3000,
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
    $("[data-scroll-to]").on("click", function (e) {
        e.preventDefault();
        var scroll_element = "#" + $(this).data("scroll-to");
        var scrollOffset = $(scroll_element)
            .offset()
            .top;
        $("html, body").animate({
            scrollTop: scrollOffset
        }, 1400, timingFunction);
    });

    // 4. scrollToTop
    $(".scrollToTop").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1400, timingFunction);
    });

    // This method is not working
    // $(window).on("load", function () {
    //     alert("Window Loaded");
    //     console.log('todo'); // 5. preloader     
    //     $("#preloader")
    //         .delay(400)
    //         .fadeOut(400, timingFunction);
    // });

    $(function () {     
        // 5. preloader
        $("#preloader")         
            .delay(400)         
            .fadeOut(400, timingFunction);

    });

    // 6. parallax
    $(".parallax-window").parallax(10);

    // 7. facts counter
    $(".facts-counter-number").appear(function () {
        var count = $(this);
        count.countTo({
            from: 0,
            to: count.html(),
            speed: 1200,
            refreshInterval: 60
        });
    });

    // 8. home fadeOut animation
    $(window).on("scroll", function () {
        $("h1.home-page-title, h2.home-page-title, h3.home-page-title").css("opacity", 1 - $(window).scrollTop() / $(".hero-fullscreen, #viewport").height());
    });

    // 9. contact form
    $("form#form").on("submit", function () {

        // delete previous success meesage
        if ($('.contact-us-success').length) {
            $('.contact-us-success').remove();
        }

        // display the contact us loader
        $('.contact-loader').prop('style', 'display:block;');

        $('.contact-submit-button').prop('disabled', true);

        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function () {
            if ("" === jQuery.trim($(this).val()) && !$(this).hasClass("phone")) {
                $(this)
                    .prev("label")
                    .text(),
                $(this)
                    .parent()
                    .append('<span class="error">Nous avons besoin de ce champ</span>'),
                $(this).addClass("inputError"),
                s = !0;
                $('.contact-submit-button').prop('disabled', false);
                $('.contact-loader').prop('style', 'display:none;');
            } else if ($(this).hasClass("email")) {
                var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

                r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Email invalide</span>'), $(this).addClass("inputError"), $('.contact-submit-button').prop('disabled', false), $('.contact-loader').prop('style', 'display:none;'), s = !0);

            } else if ($(this).hasClass("phone")) {

                var r = /^((\+)?[0-9]*)?$/;

                r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Numéro de téléphone invalide</span>'), $(this).addClass("inputError"), $('.contact-submit-button').prop('disabled', false), $('.contact-loader').prop('style', 'display:none;'), s = !0);

            }
        }), !s) {

            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function () {

                $("form#form").before('<div class="success contact-us-success">Merci pour votre message. Nous vous cont' +
                        'acterons sous les 48h (jours ouvrables).</div>');
                $('.contact-submit-button').prop('disabled', false);
                $('.contact-loader').prop('style', 'display:none;');

                $("form#form")[0].reset();

                // $("form#form")     .slideUp("fast", function () { $(this).before('<div
                // class="success text-success">Merci pour votre message. Nous vous contactero'
                // +                 'ns sous les 48h (jours ouvrables).</div>');
                // $('.contact-submit-button').prop('disabled', false);     });

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
    $(".show-skillbar").appear(function () {
        $(".skillbar").skillBars({from: 0, speed: 4000, interval: 100, decimals: 0});
    });

});
