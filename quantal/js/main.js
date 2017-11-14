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

	if ( scrolled > height / 4 ) {
		$("#main_page").css({ 'left' : "-100%" });
		$("#about").css({ 'left' : "0" });
		$("#wrapper").css({ 'clip' : 'rect(auto, 0vw, auto, auto)' });

		$(".sign_scroll").css({ 'right' : '50%', 'color' : 'black' });

		$("#about_link").addClass("current");
		$("#work_link, #contact_link").removeClass("current");
	}
	else{
		$("#main_page").css({ 'left' : "0" });
		$("#about").css({ 'left' : "100%" });
		$("#wrapper").css({ 'clip' : 'rect(auto, 100vw, auto, auto)' });

		$(".sign_scroll").css({ 'right' : '0', 'color' : 'white' });

		$("#about_link").removeClass("current");
	}
	if ( scrolled < height / 2 ) {
		$(".sign_scroll_vert").css({ 'transform' : 'translateY(-100%)', 'transition-delay' : '0s', 'transition' : '0.5s' });
	}
	else{
		$(".sign_scroll_vert").css({ 'transform' : 'translateY(0)', 'transition-delay' : '0.5s', 'transition' : '0.5s' });
	}

	if ( scrolled > height / 2 ) {
		$(".sign_scroll").css({ 'opacity' : '0', 'transform' : 'translateX(30%)' });
	}
	else{
		$(".sign_scroll").css({ 'opacity' : '1' , 'transform' : 'translateX(0)' });	
	}

	var scrolled2 = scrolled - height;
	if ( scrolled > height ) {
		$("#main_page, #about").css({ 'position' : 'absolute', 'top' : '100vh' });
		$(".sign_scroll_vert").css({ 'transform' : 'translateY(' + scrolled2 + 'px)', 'transition-delay' : '0s', 'transition' : '0s' });
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