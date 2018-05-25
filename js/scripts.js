$(function () {

    /* Menu */
    // $(".menuToggle").on('click', function() {
    // 	if ($(document).width() < 992) {
    // 		$(".nav__menu").slideToggle(500, function() {
    // 			if ($(this).css('display') === 'none') {
    // 				$(this).removeAttr('style');
    // 			}
    //
    // 		});
    // 	}
    // });
    // $(window).on('resize', function() {
    //
    // 	if ($(document).width() > 992) {
    // 		if ($(".nav__menu").css('display') === 'block') {
    // 			$(".nav__menu").removeAttr('style');
    // 		}
    // 	}
    // });

    /* Slider */
    $('.slider__items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: false
    });

    $(".slider__arrow-prev").on("click", function () {
        $('.slider__items').slick("slickPrev");

    });

    $(".slider__arrow-next").on("click", function () {
        $('.slider__items').slick("slickNext");
    });
});

