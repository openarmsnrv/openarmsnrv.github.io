$(document).ready(function() {
  
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
          top: -70
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
  
  $("#classes-nav span").on("click", function(){
    $("#classes-nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
  });
  
  $("#classes-nav").find(".infants").addClass("active");
  
  $("#testimonial-carousel").owlCarousel(
    {
      items:1,
      responsiveClass: true,
      loop:true,
      autoplay:true,
      dotsEach: true,
      dots: true
    });
    
  var classesOwl = $("#classes-carousel");
  classesOwl.owlCarousel({
      items: 1,
      autoPlay: false,
      stopOnHover: false
  });
  
  $("#mobile-classes-carousel").owlCarousel(
    {
      items:1,
      loop:true,
      autoplay:true,
      dotsEach: true,
      dots: true
    });
    
  
  $("li.class").click(function(event) {
      var slide = $(event.currentTarget).data("class");
      $("#classes-carousel").trigger('to.owl.carousel', [slide, 300]);
  });

});