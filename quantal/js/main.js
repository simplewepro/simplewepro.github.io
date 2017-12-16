/*====== Preloader function ======

var 
	images				= document.images,
	images_total_count	= images.length,
	images_loaded_count	= 0,
	perc_display		= document.getElementById('load_perc');
	preloader 			= document.getElementById('page_preloader');

for( var i = 0; i < images_total_count; i++)
{
	image_clone 		= new Image();
	image_clone.onload	= image_loaded;
	image_clone.onerror	= image_loaded;
	image_clone.src		= images[i].src;
}

function image_loaded() {
	images_loaded_count++;
	perc_display.innerHTML = (( (100 / images_total_count) * images_loaded_count) << 0) + '%';

	if ( images_loaded_count >=images_total_count ) 
	{
		setTimeout(function(){
			var preloader =  document.getElementById('page_preloader');
			if( !preloader.classList.contains('done') )
			{
				preloader.classList.add('done');
			}
		}, 1000);
	}
}

document.body.onload = function() {

	setTimeout(function(){
		if( !preloader.classList.contains('done') )
		{
			preloader.classList.add('done');
		}
	}, 1000);

}

 Endof preloader */

/* Scrolling functions */

window.onscroll = function() {
	var scrolled	= $(this).scrollTop();
	var height		= $(this).height();
	var width		= $(this).width();

	//quarter of screen scrolled, second page shown
	if ( scrolled > height / 4 ) {
		$("#main_page").css({ 'left' : "-100%" });
		$("#about").css({ 'left' : "0" });
		$("#wrapper").css({ 'clip' : 'rect(auto, 0vw, auto, auto)' });

		$("#signScrollAboutHor").css({ 'right' : '50%' });

		$("#about_link").addClass("current");
		$("#work_link, #contact_link").removeClass("current");

		//about cards
		$('.about_card').addClass('active');
	}
	else{
		$("#main_page").css({ 'left' : "0" });
		$("#about").css({ 'left' : "100%" });
		$("#wrapper").css({ 'clip' : 'rect(auto, 100vw, auto, auto)' });

		$("#signScrollAboutHor").css({ 'right' : '-250px' });

		$("#about_link").removeClass("current");

		//about cards
		$('.about_card').removeClass('active');
	}
	//endof quarter
	//half of screen scrolled
	if ( scrolled < height / 2 ) {
		$("#scrollSignAbout").css({ 'transform' : 'translateY(-100%)', 'transition-delay' : '0s', 'transition' : '0.5s' });
	}
	else{
		$("#scrollSignAbout").css({ 'transform' : 'translateY(0)', 'transition-delay' : '0.5s', 'transition' : '0.5s' });
	}

	if ( scrolled > height / 2 ) {
		$("#signScrollAboutHor").css({ 'opacity' : '0', 'transform' : 'translateX(30%)' });
	}
	else{
		$("#signScrollAboutHor").css({ 'opacity' : '1' , 'transform' : 'translateX(0)' });	
	}
	//endof half screen
	var scrolled2 = scrolled - height;
	//scrolled one screen
	if ( scrolled > height ) {
		$("#main_page, #about").css({ 'position' : 'absolute', 'top' : '100vh' });
		$("#scrollSignAbout").css({ 'transform' : 'translateY(' + scrolled2 + 'px)', 'transition-delay' : '0s', 'transition' : '0s' });
	}
	else {
		$("#main_page, #about").css({ 'position' : 'fixed', 'top' : '0' });
	}
	//endof first screen scroll
	//scrolled first block
	if ( scrolled > 2 * height - 90 ) {
		$(".white").addClass("isScrolled");
	}
	else{
		$(".white").removeClass("isScrolled");
	}

	if (scrolled > 2 * height) {
		$("#about_link").removeClass("current");
	}
	//endof first block
	//review
	var review 		= $('#review'),
		reviewPlusWorks = $(".review_plus_works"),
		reviewHalf 	= scrolled - reviewPlusWorks.offset().top + (0.3 * height);


	if(scrolled > review.offset().top - 80){
		$("#work_link").addClass("current");
	}
	else{
		$("#work_link").removeClass("current");
	}

	if ( scrolled < review.offset().top ) {
		$("#scrollSignReview").css({ 'transform' : 'translateY(-100%)', 'transition-delay' : '0s', 'transition' : '0.5s' });
	}
	else{
		$("#scrollSignReview").css({ 'transform' : 'translateY(0)', 'transition-delay' : '0.5s', 'transition' : '0.5s' });
	}

	if ( scrolled > reviewHalf ) {
		$("#scrollSignReview").css({ 'transform' : 'translateY(' + reviewHalf + 'px)', 'transition-delay' : '0s', 'transition' : '0s' });
	}

	if ( scrolled > $(".review_plus_works").offset().top ) {
		review.css({ 'position' : 'fixed' });
	}
	else{
		review.css({ 'position' : 'relative' });
	}

	if ( scrolled > reviewPlusWorks.offset().top + (0.6 * height) ) {
		$("#scrollSignReviewHor").css({ 'opacity' : '1', 'transform' : 'translate(0, 20px)' });
	}
	else{
		$("#scrollSignReviewHor").css({ 'opacity' : '0', 'transform' : 'translate(-10%, 20px)' });
	}

	if ( scrolled > reviewPlusWorks.offset().top + height ) {
		$(".review").css({ 'left' : '-100%' });
	}
	else{
		$(".review").css({ 'left' : '0' });
	}
};

function scrollToAbout() {
	var height = $(window).height();

    $("html, body").animate({ scrollTop: height }, 600);
 };
/* Endof scrolling functions */