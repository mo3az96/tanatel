$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {
    $(window).scroll(function () {
        $(this).scrollTop() >= 500 ? $(".arro_top").fadeIn(500) : $(".arro_top").fadeOut(500);
    });
    $(".arro_top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1500);
    });
    ///////// **Select** /////////
    if ($(window).width() > 767) {
        $('.search-select').select2({
            minimumResultsForSearch: Infinity,
        });
    }

    if ($(window).width() <= 767) {
        $(".search-select").addClass("mobile-select");
        $(".search-select").wrap('<div class="mobile-select-cont"></div>');
    }

    ///////// **Main Slider** ///////// 
    $('.main-slider').owlCarousel({
        items: 1,
        rtl: document.dir == 'rtl' ? true : false,
        dots: true,
        autoplay: true,
        loop: true,
        nav: true,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
    });

    ///////// **cats Slider** ///////// 
    if ($(window).width() <= 1199) {
        $('.cats').addClass("owl-carousel")
        $('.cats').owlCarousel({
            margin: 26,
            rtl: document.dir == 'rtl' ? true : false,
            loop: true,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                    maegin: 15,
                },
                500: {
                    items: 2,
                },
            }
        });
    }

    ///////// **products Slider** ///////// 
    $('.productsSlider').owlCarousel({
        margin: 17,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: true,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        }
    });
    ///////// **footer** /////////
    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
    }
    ///////// **ACC** /////////
    $('.mo-accordion').click(function () {
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(500);
        } else {
            $(this).siblings().slideUp(500);
        }
        $(".mo-accordion").not(this).siblings().slideUp(500);
    })
    ///////// **search** /////////
    if ($(window).width() <= 767) {
        $(".mo-search-icon").click(function () {
            $(".search-cont").fadeIn(400);
            $("body").addClass("overflow");
            $(".search-form").addClass("open");
        })
        $('.search-cont').click(function () {
            $("body").removeClass("overflow");
            $(".search-cont").fadeOut(500);
            $(".search-form").removeClass("open");
        });
        $('.search-form').click(function (e) {
            e.stopPropagation();
        });
    }
    //////////////////////
    if ($(window).width() > 767) {
        $(".mega-btn>.nav-a").removeAttr("href");
        $(".mega-btn .collapse").removeClass("collapse");

        $(".mega-btn").hover(
            function () {
                $(".mega-div").addClass("mega-in");
                $(".mo-overlay").fadeIn(300);
            }, function () {
                $(".mega-div").removeClass("mega-in")
                $(".mo-overlay").fadeOut(300);
            }
        );
    }
    if ($(window).width() <= 767) {
        $(".mega-menus").unwrap();
        $(".mega-menu").unwrap();


        $('.mega-div').on('show.bs.collapse', function () {
            $(".mega-div").not(this).collapse('hide');
        });
        $('.mega-ul').on('show.bs.collapse', function () {
            $(".mega-ul").not(this).collapse('hide');
        });
        $('.sub-ul').on('show.bs.collapse', function () {
            $(".sub-ul").not(this).collapse('hide');
        });

        $(".menu-btn").click(function () {
            $(".mo-overlay").fadeIn(400);
            $("body").addClass("overflow");
            $("nav").addClass("nav-in");
        })
        $('.mo-overlay').click(function () {
            $("body").removeClass("overflow");
            $(".mo-overlay").fadeOut(500);
            $("nav").removeClass("nav-in");
        });
        $('.close-menu').click(function () {
            $("body").removeClass("overflow");
            $(".mo-overlay").fadeOut(500);
            $("nav").removeClass("nav-in");
        });

    }
});