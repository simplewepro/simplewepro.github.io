$(document).ready(function(){
	$('a[href*=#]').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top -50
	    }, 500);
	    return false;
	});
});


//scrolling nav

$(window).scroll(function(){
if ($(window).scrollTop() > 600) {
  $('.nav').addClass('scroll');
} 
else {
  $('.nav').removeClass('scroll')
}
});

//scrolling small-screen nav
$(window).scroll(function(){
if ($(window).scrollTop() > 280) {
  $('.nav-small').addClass('scroll-small');
} 
else {
  $('.nav-small').removeClass('scroll-small')
}
});


/*burger click*/
$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
});
