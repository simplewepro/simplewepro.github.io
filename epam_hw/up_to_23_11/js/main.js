$(document).ready(function(){
	$('a[href*=#]').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top -50
	    }, 500);
	    return false;
	});
	
	//menuCollapse();	
	$(window).on('resize', function(){menuCollapse();});
	$('#menu').click(function(){$('#nav').slideToggle();});
});

$(document).onScroll( function() {
	var scrolled = $(this).scrollTop();

	if( scrolled > 100vh ) {
		$("#nav").addClass("scrolled");
	}
	else{
		$("#nav").removeClass("scrolled");
	}
});