$(document).ready(function() {
	$('.next').click(function() {
		var currentImage = $('.img.curry');
		var currentImageIndex = $('.img.curry').index();
		var nextImageIndex = currentImageIndex + 1;
		var nextImage = $('.img').eq(nextImageIndex);
		currentImage.animate({
				width: '50%',
				left: '23%',
				right: '23%',
				top: '100px',
				"z-index": '-1',
				opacity: '0',
			},2000);
		currentImage.removeClass('curry');

		if(nextImageIndex == ($('.img:last').index()+1)){
			$('.img').eq(0).animate({
				width: '100%',
				opacity: '1',
				left: '0',
				right: '0',
				top: '0',
				"z-index": '1'
			},2000);
			console.log(nextImageIndex);
			$('.img').eq(0).addClass('curry');
		} else {
			nextImage.animate({
				width: '100%',
				opacity: '1',
				left: '0',
				right: '0',
				top: '0',
				"z-index": '1'
			},2000);
			console.log(nextImageIndex);
			nextImage.addClass('curry')
		};
	});

	$('.prev').click(function() {
		var currentImage = $('.img.curry');
		var currentImageIndex = $('.img.curry').index();
		var prevImageIndex = currentImageIndex-1;
		var prevImage = $('.img').eq(prevImageIndex);
		currentImage.animate({
				width: '50%',
				left: '23%',
				right: '23%',
				top: '100px',
				"z-index": '-1',
				opacity: '0',
			},2000);
		currentImage.removeClass('curry');
		prevImage.animate({
				width: '100%',
				opacity: '1',
				left: '0',
				right: '0',
				top: '0',
				"z-index": '1'
			},2000);
		prevImage.addClass('curry');
	});
	/*$(document).ready(function (){*/
    			$(window).resize(function (){
       				$('.cycle-slideshow').css({
       					'margin-top': 0,
           				position:'relative',
            			top: ($(window).innerHeight() - $('.cycle-slideshow').innerHeight())/2
        				});
    				});
    			$(window).innerHeight();
			//});
});