/**
 * Highlighting an image.
 * Author (c): Alberto Garrido 2013
 * script.js
 */
$(document).ready(function(){
	var oldImgHeight = $('.highlight img').height();
	$('#container').click(function(){
		$('body').css("background-color","rgba(0,0,0,0.8)");
		$('.highlight img').height($(document).height() - $('#description').height() - 100);
		$('#container').css({"height":"100%","width":"100%","border-radius":"0"});
		$('.close').css({"visibility":"inherit","right":"210px"});
		$('#back').css("visibility","hidden");
		$('#created').css("visibility","hidden");
	});
	$('.close').click(function(){
		$('.close').css("visibility","hidden");
		$('.highlight img').height(oldImgHeight);
		$('#container').css({"border-radius":"50%","height":"250px","width":"250px"});
		$('body').css("background-color","#FFF");
		$('#back').css("visibility","visible");
		$('#created').css("visibility","visible");
	});
});