jQuery(document).ready(function() {
	

	$('#categoriesCarousel').on('slide.bs.carousel', function (e) {
	    var $e = $(e.relatedTarget);
	    var idx = $e.index();
	    var itemsPerSlide = 5;
	    var totalItems = $('.carousel-item').length;
	    
	    if (idx >= totalItems-(itemsPerSlide-1)) {
	        var it = itemsPerSlide - (totalItems - idx);
	        for (var i=0; i<it; i++) {
	            // append slides to end
	            if (e.direction=="left") {
	                $('.carousel-item').eq(i).appendTo('.carousel-inner');
	            }
	            else {
	                $('.carousel-item').eq(0).appendTo('.carousel-inner');
	            }
	        }
	    }
	});
	

	$("#multiItemsCarousel").on("mouseover",function(e){
		//On mosue hover on carousel show the handels
		$(".carousel-control-prev,.carousel-control-next").addClass("handelHighlight");
	});
	$("#multiItemsCarousel").on("mouseout",function(e){
		//On mosue hover on carousel show the handels
		$(".carousel-control-prev,.carousel-control-next").removeClass("handelHighlight");
	});



	// ScrollReveal Animations
	window.sr = ScrollReveal();
	ScrollReveal().reveal('#slides #slide1 .carousel-caption h1', { 
		origin: 'top',
		distance: '200px',
		scale: 0.9

	 });
	ScrollReveal().reveal('#slides #slide1 .carousel-caption h3', { 
		origin: 'top',
		distance: '0px',
		scale: 0.1

	 });
	ScrollReveal().reveal('#slides #slide1 .carousel-caption .btn', { 
		origin: 'top',
		distance: '0px',
		opacity: 0,
		duration:1000,
		delay:500
	 });
	ScrollReveal().reveal('.jumbotron p , #instaPhotos', { 
		origin: 'left',
		distance: '200px',
		opacity: 0,
		viewFactor: 0.2
	 });
	ScrollReveal().reveal('.jumbotron .callToActionDiv , #testimonialsContainer', { 
		origin: 'right',
		distance: '200px',
		opacity: 0,
		viewFactor: 0.2
	 });
	ScrollReveal().reveal('.welcome, .card , #discover , #discoverTabContent , #whyOnlineshop', { 
		origin: 'bottom',
		distance: '200px',
		opacity: 0,
		viewFactor: 0.2
	 });
	ScrollReveal().reveal('#CategoriesMultiItemCarousel .row div', { 
		origin: 'bottom',
		distance: '0px',
		opacity: 0,
		viewFactor: 0.2
	 });








});
