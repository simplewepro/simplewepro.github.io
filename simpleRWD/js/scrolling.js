$(document).ready(function(){
	$('a[href*=#]').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top -50
	    }, 500);
	    return false;
	});
	/*Hide\show scroll button*/
	$(window).scroll(function(){
		if ($(window).scrollTop() > 200) {
		  $('.scrollToTop').addClass('scrolled');
		} 
		else {
		  $('.scrollToTop').removeClass('scrolled');
		}
	});
	/*Slider initialization*/
	$('.carousel-slide').sliderArrow({
		next_slides : 3000
	});
});