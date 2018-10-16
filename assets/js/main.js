/*
	Template  Name: BIZES Business and Agency HTML Template;
	Template URI: www.bootitems.com
	Description: This is a Business and Agency HTML Template;
	Author: Masud Rana
	Author URI: www.bootitems.com
	Version: 1.0  
*/
/*================================================
[  Table of contents  ]
================================================
	01. jQuery MeanMenu Active
	02. Drone Testimonial
	03. Bike Testimonial
	04. Headphone Testimonial Carousel
	05. Headphone Gallery area
	06. Live cam Testimonial Carousel
	07. App Testimonial Carousel
	08. App Logo Carousel
	09. Watch hero Carousel
	10. App Screenshot
	11. one page js active
	12. Venobox Active
	13. Sticky Header
	14. Wow Active
/*

/*

======================================
[ End table content ]
======================================*/

(function ($) {
 "use strict";

    jQuery(document).ready(function($){
		
		/* ==== 01. jQuery MeanMenu Active ==== */
		if ($('.bizes-nav').length) {
			jQuery('.bizes-nav').meanmenu();	
		}
		
		/* ==== 02. Drone Testimonial ==== */
		 if ($('.drone-testimonial-wrap').length) {
		 	$('.drone-testimonial-wrap').owlCarousel({
		 		autoplay:false,
		 		items:1,
		 		loop:true,
		 		autoplayHoverPause: false,
				smartSpeed: 500,
		 		margin:0,
				nav:true,
		 		navText:['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
			dots:true,
		 	}) 
		 }


		/* ==== 03. Bike Testimonial ==== */
		if ($('.bike-testimonial-carousle').length) {
			$('.bike-testimonial-carousle').owlCarousel({
				autoplay:false,
				items:1,
				loop:true,
				autoplayHoverPause: false,
				smartSpeed: 500,
				margin:0,
				nav:true,
				navText:['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
				dots:true,
			}) 
		}

		/* ==== 04. Headphone Testimonial Carousel ==== */
		if ($('.music-testimonial-wrap').length) {
			$('.music-testimonial-wrap').owlCarousel({
				autoplay:false,
				items:2,
				loop:true,
				autoplayHoverPause: false,
				smartSpeed: 500,
				margin:30,
				nav:true,
				navText:['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
				dots:true,
				responsiveClass:true,
				responsive:{
					0:{
						items:1,
					},
					600:{
						items:2,
					},
					768:{
						items:2,
					},
					1000:{
						items:2,
					}
				}
			}) 
		}
		/* ==== 05. Headphone Gallery area ==== */
		if ($('.music-gallery-wrap').length) {
			$('.music-gallery-wrap').owlCarousel({
				autoplay:false,
				items:4,
				loop:true,
				autoplayHoverPause: false,
				smartSpeed: 500,
				margin:30,
				center:true,
				nav:false,
				navText:['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
				dots:false,
				responsiveClass:true,
				responsive:{
					0:{
						items:1,
					},
					600:{
						items:2,
					},
					768:{
						items:3,
					},
					1000:{
						items:4,
					}
				}
			}) 
		}
		/* ==== 06. Live cam Testimonial Carousel ==== */
		if ($('.cam-testimonial-wrap').length) {
			$('.cam-testimonial-wrap').owlCarousel({
				autoplay:false,
				items:3,
				loop:true,
				autoplayHoverPause: false,
				smartSpeed: 500,
				margin:30,
				nav:false,
				navText:['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
				dots:false,
				responsiveClass:true,
				responsive:{
					0:{
						items:1,
					},
					600:{
						items:2,
					},
					768:{
						items:2,
					},
					1000:{
						items:3,
					}
				}
			}) 
		}

		/* ==== 07. App Testimonial Carousel ==== */
		if ($('.apptestimonial-wrap').length) {
			$('.apptestimonial-wrap').owlCarousel({
				autoplay:false,
				items:1,
				loop:true,
				autoplayHoverPause: false,
				smartSpeed: 500,
				margin:30,
				nav:true,
				navText:['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
				dots:false,
			}) 
		}

		/* ==== 08. App Logo Carousel ==== */
		if ($('.app-logocarousel-wrap').length) {
			$('.app-logocarousel-wrap').owlCarousel({
				autoplay:false,
				items:4,
				loop:true,
				autoplayHoverPause: false,
				smartSpeed: 500,
				margin:30,
				nav:false,
				navText:['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
				dots:false,
				responsiveClass:true,
				responsive:{
					0:{
						items:1,
					},
					600:{
						items:2,
					},
					768:{
						items:3,
					},
					1000:{
						items:4,
					}
				}
			}) 
		}

		/* ==== 09. Watch hero ==== */
		if ($('.watch-img-carousel-wrap').length) {
			$('.watch-img-carousel-wrap').owlCarousel({
				autoplay:true,
				items:1,
				loop:true,
				autoplayHoverPause: false,
				smartSpeed: 500,
				margin:0,
				nav:false,
				dots:false,
			}) 
		}
		/* ==== 10. App Screenshot ==== */
		if ($('.screenshot-wrap').length) {
			$('.screenshot-wrap').owlCarousel({
				autoplay:false,
				items:4,
				loop:true,
				autoplayHoverPause: false,
				smartSpeed: 500,
				autoWidth: false,
				margin:5,
				center:true,
				nav:true,
				navText:['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
				dots:false,
				responsiveClass:true,
				responsive:{
					0:{
						items:1,
					},
					600:{
						items:2,
					},
					768:{
						items:3,
					},
					1000:{
						items:4,
					}
				}
			}) 
		}

    /*====  11. one page js active =====*/
        $('.main-menu-wrap > .bizes-nav > ul.menu > li > a').click(function() {
            //Toggle Class
            $(".active").removeClass("active");
            $(this).closest('li').addClass("active");
            var theClass = $(this).attr("class");
            $('.' + theClass).parent('li').addClass('active');
            //Animate
            $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top - 100
            }, 1000);
            return false;
        });




		/* ==== 12. Venobox Active ==== */	
		if ($('.venobox').length) {
			$('.venobox').venobox(); 
		}

		/* ==== 11. ScrollUp ==== */
		$.scrollUp({
			scrollText: '<i class="fa fa-arrow-up"></i>',
			easingType: 'linear',
			scrollSpeed: 900,
			animation: 'fade'
		}); 
	
    });
	
	/* ==== 13. Sticky Header ==== */
	$(window).on('scroll',function() {
	  if ($(this).scrollTop() > 1){  
		$('.header-area.primary-header').addClass("scroll-header");
	    }
	  else{
		$('.header-area.primary-header').removeClass("scroll-header");
	    }
	}); 
	
	/* ==== 14. Preloader ==== */
	$(window).on('load',function(){
		jQuery(".preloader-wrap").fadeOut(500);
	});
	/* ==== 15. Wow active ==== */
	new WOW().init();
	
})(jQuery); 