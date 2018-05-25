$(function () {

    /* Menu */
    $(".menuToggle").on('click', function() {
    	if ($(document).width() < 720) {
    		$(".menu").slideToggle(500, function() {
    			if ($(this).css('display') === 'none') {
    				$(this).removeAttr('style');
    			}

    		});
    	}
    });
    $(window).on('resize', function() {

    	if ($(document).width() > 720) {
    		if ($(".menu").css('display') === 'block') {
    			$(".menu").removeAttr('style');
    		}
    	}
    });

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

