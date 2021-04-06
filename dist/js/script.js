$('.slider-container').slick({
  swipe: true,
  // infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true, 
  variableWidth: true,
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
