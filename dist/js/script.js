$(".menu__link").each(function(){
  var link = $(this);
  if( link.find(".sub-menu").length ) {
    $(link).append('<span class="menu__arrow"></span>');
  }
});

$('.menu__link-item_disable').click(function(e){
  e.preventDefault();
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

$('.menu__arrow').click(function(e){
  $(this).toggleClass('menu__arrow--act');
  $(this).parent().toggleClass('.menu__link--active');
  var link = $(this).parent();
  $('.sub-menu', link).toggleClass('sub-menu--active');
});

$('#slider-services').slick({
  swipe: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  swipeToSlide: true, 
  variableWidth: true,
  arrows: true,
  nextArrow: $('.slider-services__next'),
  prevArrow: $('.slider-services__prev'),
});

$('.slider-container').slick({
  swipe: true,
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
        variableWidth: true,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        arrows: true,
        nextArrow: $('.slider__next'),
        prevArrow: $('.slider__prev'),
        variableWidth: true,
      }
    },
  ]
});

$('.btn-photo').click(function(e){
  var box = $(this).parent();
  $('.photo__container', box).addClass('photo__container--act');
});

$('.btn-photo-close').click(function(e){
  $(this).parent().removeClass('photo__container--act');
});

$('.box-slider__item').click(function(e){
  $('.box-slider__item').removeClass('active');
  var text = $(this).text();
  $('.slider-item-name').text(text);
  $(this).addClass('active');
});

$(".tabs__body .tabs__tab").first().css('display', 'flex');

$('.tabs__item').click(function(e){
  e.preventDefault();
  var id = $(this).attr('href');
  $('.tabs__item').removeClass('tabs__item_active');
  $(this).addClass('tabs__item_active');
  $(".tabs__tab").hide();
  $(id).css('display', 'flex');
});