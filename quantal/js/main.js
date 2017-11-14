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
	var workPosition= $("#work").offset();

	if ( scrolled > height / 2 ) {
		$("#main_page").css({ 'left' : "-100%" });
		$("#about").css({ 'left' : "0" });
		$("#wrapper").css({ 'clip' : 'rect(auto, 0vw, auto, auto)' });

		$("#about_link").addClass("current");
		$("#work_link, #contact_link").removeClass("current");
	}
	else{
		$("#main_page").css({ 'left' : "0" });
		$("#about").css({ 'left' : "100%" });
		$("#wrapper").css({ 'clip' : 'rect(auto, 100vw, auto, auto)' });

		$("#about_link").removeClass("current");
	}

	if ( scrolled > height ) {
		$("#main_page, #about").css({ 'position' : 'absolute', 'top' : '100vh' });
	}
	else {
		$("#main_page, #about").css({ 'position' : 'fixed', 'top' : '0' });
	}
	if ( scrolled > 2 * height - 90 ) {
		$(".white").addClass("isScrolled");
	}
	else{
		$(".white").removeClass("isScrolled");
	}

	if (scrolled > 2 * height) {
		$("#about_link").removeClass("current");
	}
	else{
		//$("#main_page, #about").css({ 'position' : 'fixed'});
	}
};

function scrollToAbout() {
	var height = $(window).height();

    $("html, body").animate({ scrollTop: height }, 600);
 };
/* Endof scrolling functions */