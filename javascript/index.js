$(document).ready(function() {
  // $('body').scrollspy({target:'.navbar-collapse', offset:10});
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
  
  $("#classes-nav a").on("click", function(){
    $("#classes-nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
  });
  
  $("#classes-nav").find(".infants").addClass("active");

  $('body').scrollspy({
  		target: '.navbar-collapse',
  		offset: 150
  	});

  	$('[data-spy="scroll"]').each(function () {
  		var $spy = $(this).scrollspy('refresh');
  	});

  	// Fix scroll position set by browser when page loads first
  	$(window).one("load", function() {
  		$('.navbar a[href$="' + window.location.hash + '"]').click();
  	});

  function makeFullscreen() {
      $('section.fullscreen').each(function(){
        var win_height = $(window).height();
        var navbar_height = $('body > .navbar').height();
        var available_height = win_height;
        $(this).css('height', available_height + 'px');
      });
    }

    makeFullscreen();

    $(window).resize(function(){
      makeFullscreen();
    });

    if( $().superslides ) {
      $('.superslides').each(function(){

        $('.superslides').superslides({
          play: 7000,
          animation_speed: "slow",
          animation: "fade",
          pagination: false,
          inherit_height_from: "#start",
          inherit_width_from: "#start"
        });

      });
    }

    $("#staff-carousel").owlCarousel({items : 5});
    $("#testimonial-carousel").owlCarousel(
      {
        singleItem: true,
        autoPlay: true,
        stopOnHover: true,
        navigation: false,
        pagination: true
      });
      
    var classesOwl = $("#classes-carousel");
    classesOwl.owlCarousel({
        singleItem: true,
        autoPlay: false,
        stopOnHover: false,
        navigation: true,
        pagination: true
    });
      
    
    $("h1").click(function() {
        var owl = $("#classes-carousel");
        owl.owlCarousel();
        owl.trigger('next.owl.carousel');
    });

});

function updateSchedule(classSchedule) {
  customHide('.mobile-schedule');
  if (classSchedule == 'infantSchedule')
    customShow('#mobileInfantSchedule');
  else if (classSchedule == 'toddlerSchedule')
    customShow('#mobileToddlerSchedule');
  else if (classSchedule == 'twosSchedule')
    customShow('#mobileTwosSchedule');
  else
    customShow('#mobilePreSchoolerSchedule');
}

function customHide(selector) {
  $(selector).attr('style', 'display: none !important;');
}

function customShow(selector) {
  $(selector).attr('style', 'display: block !important;');
}

//function makeFullscreen() {
//		$('section.fullscreen').each(function(){
//			win_height = $(window).height();
//			navbar_height = $('body > .navbar').height();
//			available_height = win_height - navbar_height;
//			$(this).css('min-height', available_height + 'px');
//		});
//	}
//
//	makeFullscreen();
//
//	$(window).resize(function(){
//		makeFullscreen();
//	});
//
//	if( $().superslides ) {
//		$('.superslides').each(function(){
//
//			play            = $(this).attr('data-pause');
//			animation_speed = $(this).attr('data-animation');
//			animation       = $(this).attr('data-effect');
//			pagination      = $(this).attr('data-pagination');
//			width           = $(this).attr('data-width');
//			height          = $(this).attr('data-height');
//
//			$('.superslides').superslides({
//				play: play,
//				animation_speed: animation_speed,
//				animation: animation,
//				pagination: false,
//				inherit_height_from: width,
//				inherit_width_from: height
//			});
//
//		});
//	}
