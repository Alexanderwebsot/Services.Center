$(document).ready(function () {
  $('.slider-news').slick({
  	dots: true,
  	autoplay: true,
  	autoplaySpeed: 2600,
  })
  $(".phone").mask("+7 (999) 999-9999");
  $('.slider-brends').slick({
  	dots: true,
  	slidesToShow: 5,
  	dots: false,
  	prevArrow: $('.slider-brends__arrow_l'),
  	nextArrow: $('.slider-brends__arrow_r'),
  	autoplay: true,
  	autoplaySpeed: 2000,
  })
  $(document).ready(function () {
      $('.accordion-tabs').children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
      $('.accordion-tabs').on('click', 'li > a', function(event) {
        if (!$(this).hasClass('is-active')) {
          event.preventDefault();
          $('.accordion-tabs .is-open').removeClass('is-open').hide();
          $(this).next().toggleClass('is-open').toggle();
          $('.accordion-tabs').find('.is-active').removeClass('is-active');
          $(this).addClass('is-active');
        } else {
          event.preventDefault();
        }
      });
    });
  $(document).ready(function (){
        $(".scroll").click(function (){
            $('html, body').animate({
                scrollTop: $("#header").offset().top
            }, 1000);
        });
    });
  $(window).scroll(function() {
  	let element = $('.header-center')
    if ($(window).scrollTop() >= 200) {
    	$(element).addClass('header-center-active')
    	$('.header-bottom')[0].style.paddingTop = '99px';
    }
    if ($(window).scrollTop() <= 200) {
    	$(element).removeClass('header-center-active')
    	$('.header-bottom')[0].style.paddingTop = '0px';
    }
  });
});
$(document).ready(function() {
    var $menu = $("#my-menu").mmenu();
    var $icon = $("#mmenu-icon");
    var API = $menu.data( "mmenu" );
    $icon.on( "click", function() {
        API.open();

    });
    API.bind( "opened", function() {
       setTimeout(function() {
          $icon.addClass( "is-active" );
       }, 100);
       $icon.on( "click", function() {
          API.close();
       });

   });
   API.bind( "closed", function() {
      setTimeout(function() {
         $icon.removeClass( "is-active" );
      }, 100);
      $icon.on( "click", function() {
         API.open();
      });
   });
});