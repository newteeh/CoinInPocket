$('.single-item').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });

  $('.multiple-items').slick({
    infinite: true,
    
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '.Reviews__button-prev',
    nextArrow: '.Reviews__button-next'
  });