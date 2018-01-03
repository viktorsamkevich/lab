//preloader
$(window).on('load', function () {
	var $preloader = $('#page-preloader'),
		$spinner   = $preloader.find('.spinner');
		$spinner.fadeOut();
		$preloader.delay(350).fadeOut('slow');
});
//Animate
$(document).ready(function() {
	//Carousel	
	/*$('.owlFeatured_logos').owlCarousel({
    	loop: true,
    	margin: 10,
    	nav: true,
    	responsive: {
    		0:{
    			items:1
    		},
    		600:{
    			items:3
    		},
     		1000:{
    			items:5
    		}
    	}
    	navText : ["&larr;", "&rarr;"]
    });*/

    $('.jsCarousel').owlCarousel({
    	loop:true,
    	nav:true,
    	items:1,
    	navText : ["", ""]
    });

    //Popup	
    $('.jsOpenPopup').click(function() {
    	$('.jsPopup').bPopup({
 		    easing:'easeOutBack', //uses jQuery easing plugin
 		    speed: 450,
 		    transition: 'slideDown'  
 		});
    });

 	//Validation   
 	$('.jsValidate').feelform({
 		validateOnTheFly: true
 	});

    //Fancybox
    $('.jsFancybox a').fancybox();

    //WOW
    new WOW().init();
});
