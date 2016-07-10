$(document).ready(function() {
  
  var numRand = Math.floor(Math.random() * 5);
  $('.hero-unit-fullscreen').css('background-image', 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(images/background_hero' + numRand + '.jpg)');

  $('body').scrollspy({
    target: '.navbar-collapse',
    offset: 150
  });
 
  $('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh');
  });
  
  $('.navbar-nav').localScroll({
      duration: 1000,
			easing: 'easeInOutExpo',
      offset: {
          // top: -2
      }
  });
  
  $('.scroll-down').localScroll({
      duration: 1000,
			easing: 'easeInOutExpo',
      offset: {
          // top: -20
      }
  });
  
  $('.navbar-collapse a').each(function(){

		var location = window.location.toString();
		var url = $(this).attr('href');
		var hash = url.substring( url.indexOf('#') );
		var clean_url = url.replace(hash, '');

		if( location === hash )
      hash = '#top';

		if( location = clean_url )
      $(this).attr('data-target', hash);

	});
  
  $("#testimonial-carousel").owlCarousel(
    {
      items:1,
      responsiveClass: true,
      loop:true,
      autoplay:true,
      dotsEach: true,
      dots: true
    });
    
    $('.portfolio-item').on('click', function() {
      // do nothing, somehow this triggering portfolio overlay on mobile Safari
    });
    $('.class-item').on('click', function() {
      // do nothing, somehow this triggering portfolio overlay on mobile Safari
    });
});