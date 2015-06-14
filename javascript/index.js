function makeFullscreen() {
		$('section.fullscreen').each(function(){
			win_height = $(window).height();
			navbar_height = $('body > .navbar').height();
			available_height = win_height - navbar_height;
			$(this).css('min-height', available_height + 'px');
		});
	}

	makeFullscreen();

	$(window).resize(function(){
		makeFullscreen();
	});

	if( $().superslides ) {
		$('.superslides').each(function(){

			play            = $(this).attr('data-pause');
			animation_speed = $(this).attr('data-animation');
			animation       = $(this).attr('data-effect');
			pagination      = $(this).attr('data-pagination');
			width           = $(this).attr('data-width');
			height          = $(this).attr('data-height');

			$('.superslides').superslides({
				play: play,
				animation_speed: animation_speed,
				animation: animation,
				pagination: false,
				inherit_height_from: width,
				inherit_width_from: height
			});

		});
	}
