//contacts
//----carusel--
$(function(){
	var showcase = $('#showcase')
	showcase.Cloud9Carousel({
		yPos: 42,
		yRadius: 48,
		mirrorOptions: {
			gap: 12,
			height: 0.2
		},
		buttonLeft: $('.buttons > .left'),
		buttonRight: $('.buttons > .right'),
		autoPlay: true,
		bringToFront: true,
	});
	$(document).keydown(function(e){
		switch(e.keyCode){
			case 37:
			$('.buttons > .left').click()
			break
			case 39:
			$('.buttons > .right').click()
		}
	});
});