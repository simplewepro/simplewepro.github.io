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

function services0(){
	var label1 = document.getElementById('tab1');
	var label2 = document.getElementById('tab2');
	var label3 = document.getElementById('tab3');
	label1.checked = true;
	label2.checked = false;	
	label3.checked = false;
}

function services1(){
	var label1 = document.getElementById('tab1');
	var label2 = document.getElementById('tab2');
	var label3 = document.getElementById('tab3');
	label1.checked = false;
	label2.checked = true;
	label3.checked = false;
}

function services2(){
	var label1 = document.getElementById('tab1');
	var label2 = document.getElementById('tab2');
	var label3 = document.getElementById('tab3');
	label1.checked = false;
	label2.checked = false;
	label3.checked = true;
}


function album1(){
	$('#album1').removeClass('hidden');
	$('#album1').addClass('visible');
}
function album1close(){
	$('#album1').removeClass('visible');
	$('#album1').addClass('hidden');
}
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


// Parallax

$(window).scroll(function() {

	var st = $(this).scrollTop();

	$(".header_text").css({
		"transform" : "translate(0%, " + st/16 + "%"
	});
});