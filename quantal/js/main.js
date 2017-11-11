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
	var height		= $(window).height();
	var width		= $(window).width();
	var scrolPerc	= ( scrolled / height ) * 100;
	var horizPerc	= 100 - scrolPerc;

	$("#main_page, #blue").css({ 'transform' : 'translate(-' + scrolPerc + '%, ' + scrolPerc + '%)' });
	$("#wrapper").css({ 'clip' : 'rect(auto, ' + horizPerc + 'vw, auto, auto)' });
	$(".white:before").css({ 'background' : 'red' })

	if ( scrolled > height ) {
		$("#main_page, #blue").css({ 'transform' : 'translate(-100%, 100%)' });
		$("#wrapper").css({ 'clip' : 'rect(auto, 0vw, auto, auto)' });
	}

};

/* Endof scrolling functions */