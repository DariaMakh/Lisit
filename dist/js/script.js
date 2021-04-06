$('.slider-container').slick({
  swipe: true,
  // infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true, 
  variableWidth: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        arrows: true,
        nextArrow: $('.slider__next'),
        prevArrow: $('.slider__prev'),
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        arrows: true,
        nextArrow: $('.slider__next'),
        prevArrow: $('.slider__prev'),
        centerMode: true,
        centerPadding: '100px',
      }
    },
  ]
});

$('.burger').click(function(e){
  $('.burger-icon').toggleClass('animate');
  var width = $(window).width();
  if (width <= 1100){
    var contacts = $('.nav__contacts');
    $('.menu').append($(contacts));
    $('.menu').toggleClass('menu-active');
  } else if (width > 1100){
    $('.menu').toggleClass('menu-active');
  }
});

$('.btn-photo').click(function(e){
  var box = $(this).parent();
  $('.photo__container', box).addClass('photo__container--act');
});

$('.btn-photo-close').click(function(e){
  $(this).parent().removeClass('photo__container--act');
});

$('.box-slider__item').click(function(e){
  $('.box-slider__item').removeClass('box-slider__item--act');
  $(this).addClass('box-slider__item--act');
});
